// colleciton of combinators

//    Ibis (identity)
//    I := λa.a
const I = a => a

//    Mockingbird (self-application)
//    M := λf.ff := ω
const M = f => f(f)
//    M(M) = ω ω = Ω

//    Kestrel (first, const)
//    K := λab.a
const K = a => b => a

//    KIte (second)
//    KI := λab.b
//       := K(λa.a) := KI := CK
const KI = a => b => b
//    KI = K(I)

//    Cardinal (filp, reverse arguments)
//    C := λfab.fba
const C = f => a => b => f(b)(a)

//    True (boolean true)
//    T := λab.a := K
const T = a => b => a

//    False (boolean false)
//    F := λab.b := KI
const F = a => b => b

//    Not (negation)

const res = K(T)(F)
console.log(res)
