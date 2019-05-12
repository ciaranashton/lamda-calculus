// Colleciton of combinators

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

//    not (negation)
//    not := λp.pFT := C
const not = p => p(F)(T)

//    and (conjunction)
//    and := λpq.pqF := λpq.pqp
const and = p => q => p(q)(p)

//    or (disjunction)
//    or := λpq.pTq := λpq.ppq := M*
const or = p => q => p(p)(q)

//    beq (boolean)
//    beq := λpq.p(qTF)(qFT)
//        := λpq.pq(NOT q)
const beq = p => q => p(q)(not(q))

const res = beq(F)(F)
console.log(res)
