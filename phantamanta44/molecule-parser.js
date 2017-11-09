const cations = [{f:'H',a:{H:1}},{f:'Na',a:{Na:1}},{f:'NH4',p:!0,a:{N:1,H:4}},{f:'K',a:{K:1}},{f:'Mg',a:{Mg:1}},{f:'Ca',a:{Ca:1}},{f:'Sr',a:{Sr:1}},{f:'Ba',a:{Ba:1}},{f:'Fe',a:{Fe:1}},{f:'Hg',a:{Hg:1}},{f:'Al',a:{Al:1}},{f:'Mn',a:{Mn:1}},{f:'Ag',a:{Ag:1}},{f:'Pb',a:{Pb:1}},{f:'Zr',a:{Zr:1}}];
const anions = [{f:'N',a:{N:1}},{f:'O',a:{O:1}},{f:'F',a:{F:1}},{f:'Cl',a:{Cl:1}},{f:'I',a:{I:1}},{f:'S',a:{S:1}},{f:'P',a:{P:1}},{f:'SO4',p:!0,a:{S:1,O:4}},{f:'SO3',p:!0,a:{S:1,O:3}},{f:'CN',p:!0,a:{C:1,N:1}},{f:'NO3',p:!0,a:{N:1,O:3}},{f:'CrO4',p:!0,a:{Cr:1,O:4}},{f:'Cr2O7',p:!0,a:{Cr:2,O:7}},{f:'C2H3O2',p:!0,a:{C:2,H:3,O:2}},{f:'PO4',p:!0,a:{P:1,O:4}}];
for (let i = 0; i < 50; i++) {
  const ci = cations[Math.floor(Math.random() * cations.length)];
  const ai = anions[Math.floor(Math.random() * anions.length)];
  const a = Math.floor(Math.random() * 5) + 1, b = Math.floor(Math.random() * 5) + 1;
  const atoms = {};
  const add = (e, n) => { if (atoms.hasOwnProperty(e)) { atoms[e] += n; } else { atoms[e] = n } };
  for (const key in ci.a) { if (ci.a.hasOwnProperty(key)) add(key, ci.a[key] * a); }
  for (const key in ai.a) { if (ai.a.hasOwnProperty(key)) add(key, ai.a[key] * b); }
  let str = '';
  if (ci.p && a > 1) { str += `(${ci.f})${a}`; } else { str += `${ci.f}${a !== 1 ? a : ''}` }
  if (ai.p && b > 1) { str += `(${ai.f})${b}`; } else { str += `${ai.f}${b !== 1 ? b : ''}` }
  Test.assertDeepEquals(atoms, parse(str));
}