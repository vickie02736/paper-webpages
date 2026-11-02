"""Export a finite crystal view from local CSD coordinates and CSD bonds, not inferred bonds."""
import json,math,hashlib
from pathlib import Path
from collections import Counter
from ccdc import io

def export():
    ROOT=Path(__file__).resolve().parents[2]
    out=ROOT/'papers/water-stable-mof-discovery/assets/structures'
    with io.EntryReader('CSD') as r:
        audit=[]
        for ref in ('IQECIS','YEZKUL'):
         entry=r.entry(ref);c=entry.crystal
         components=c.molecule.components
         framework=[x for x in components if x.is_polymeric]
         assert len(framework)==1
         removed=[{'formula':x.formula,'atoms':len(x.atoms)} for x in components if not x.is_polymeric]
         c.molecule=framework[0]
         p=c.packing(box_dimensions=((0,0,0),(1,1,1)),inclusion='OnlyAtomsIncluded')
         index={a:i for i,a in enumerate(p.atoms)}
         atoms=[[a.atomic_symbol,*[round(float(v),6) for v in a.coordinates]] for a in p.atoms]
         bonds=[];long=[]
         for b in p.bonds:
          a1,a2=b.atoms;i,j=index[a1],index[a2]
          length=math.dist(atoms[i][1:],atoms[j][1:])
          if length>4:long.append([i,j,round(length,4)])
          else:bonds.append([i,j])
         # Long polymeric links, if any, need explicit treatment; never silently draw them across a cell.
         assert not long,(ref,long)
         a,b,cl=c.cell_lengths;al,be,ga=map(math.radians,c.cell_angles)
         avec=[a,0,0];bvec=[b*math.cos(ga),b*math.sin(ga),0]
         cx=cl*math.cos(be);cy=cl*(math.cos(al)-math.cos(be)*math.cos(ga))/math.sin(ga)
         cvec=[cx,cy,math.sqrt(cl*cl-cx*cx-cy*cy)]
         corners=[[round(i*avec[k]+j*bvec[k]+z*cvec[k],6) for k in range(3)] for i in (0,1) for j in (0,1) for z in (0,1)]
         edges=[[i,j] for i in range(8) for j in range(i+1,8) if bin(i^j).count('1')==1]
         payload={'refcode':ref,'ccdc':entry.ccdc_number,'doi':entry.publication.doi,'spacegroup':c.spacegroup_symbol,'cellLengths':list(c.cell_lengths),'cellAngles':list(c.cell_angles),'atoms':atoms,'bonds':bonds,'corners':corners,'cellEdges':edges,'view':'one conventional unit cell, polymeric component only; disconnected guests removed; H retained in data','removedComponents':removed}
         dest=out/(ref.lower()+'.json');dest.write_text(json.dumps(payload,separators=(',',':'))+'\n')
         audit.append({'refcode':ref,'ccdc':entry.ccdc_number,'doi':entry.publication.doi,'cellLengths':list(c.cell_lengths),'cellAngles':list(c.cell_angles),'spacegroup':c.spacegroup_symbol,'atomCount':len(atoms),'bondCount':len(bonds),'elements':dict(Counter(x[0] for x in atoms)),'maxBondLength':max(math.dist(atoms[i][1:],atoms[j][1:]) for i,j in bonds),'removedComponents':removed,'sha256':hashlib.sha256(dest.read_bytes()).hexdigest()})
        (ROOT/'reports/discovery-high-school/structure-audit.json').write_text(json.dumps(audit,indent=2)+'\n')
        print(json.dumps(audit,indent=2))

if __name__ == "__main__":
    export()
    import gc
    gc.collect()
