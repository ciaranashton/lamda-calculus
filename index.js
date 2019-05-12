// Colleciton of combinators

//    Ibis (identity)
//    I := λa.a
const I = a => a

//    Mockingbird (self-application)
//    M := λf.ff
const M = f => f(f)
//    M(M) = ω ω = Ω

//    Kestrel (first, const)
//    K := λab.a
const K = a => b => a

//    KIte (second)
//    KI := λab.b
//       := K(λa.a)
//       := KI
//    KI = a => b => b;
const KI = K(I)

//    Cardinal (filp, reverse arguments)
//    C := λfab.fba
const C = f => a => b => f(b)(a)
//    CK = KI

const res = C(K)(I)(M)
console.log(res)
