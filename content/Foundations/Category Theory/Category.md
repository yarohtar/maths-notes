---
{"publish":true,"aliases":"Categories","created":"2025-12-24T04:28:25.855+00:00","modified":"2025-12-24T04:28:25.855+00:00","cssclasses":""}
---

A category $\mathcal{C}$ consists of
1. a collection of $\operatorname{ob}\mathcal{C}$  of [[Foundations/Category Theory/Object]]s $A, B, C,\dots$
2. a collection $\operatorname{mor}\mathcal{C}$ of [[Foundations/Category Theory/Morphism]]s $f,g,h, \dots$ 
3. two operations $\operatorname{dom}$ and $\operatorname{cod}$ sending morphisms to objects
   we write $A\xrightarrow{f} B$ to mean $\operatorname{dom} f=A$ and $\operatorname{cod}f=B$
4. An operation sending $A$ to $1_{A}$ where $A\xrightarrow 1_{A}A$
5. A partial binary operation on morphisms $(f,g)\to fg$ such that:
$$
fg \text{ defined} \iff \operatorname{dom}f=\operatorname{cod}g
$$
and then $\operatorname{dom}fg=\operatorname{dom}g$ and $\operatorname{cod}fg =\operatorname{cod}f$
subject to:
6. $f 1_{A}=f$ and $1_{A}g=g$ whenever the composites are defined
7. [[Foundations/Category Theory/Associativity]]: $f(gh)=(fg)h$ whenever $fg$ and $gh$ are defined

[[Foundations/Category Theory/Isomorphism]]
[[Foundations/Category Theory/Small Category]]
[[Foundations/Computability/Quotient Category]]
[[Foundations/Category Theory/Opposite Category]]
[[Foundations/Category Theory/Functor]]
[[Foundations/Category Theory/Skeletal]]
[[Foundations/Category Theory/Balanced]]
### Examples
[[Foundations/Category Theory/Category of Sets]]
[[Foundations/Category Theory/Category of Relations]]
[[Foundations/Category Theory/Category of Partial Functions]]
[[Foundations/Category Theory/Category of Groups]]
[[Foundations/Category Theory/Category of Rings]]
[[Foundations/Category Theory/Category of Vector Spaces]]
[[Foundations/Category Theory/Category of Topological Spaces]]
[[Foundations/Category Theory/Category of Metric Spaces]]
[[Foundations/Category Theory/Category of Smooth Manifolds]]
[[Foundations/Category Theory/Category of Topological Groups]]
[[Foundations/Category Theory/Category of Homotopy]]
[[Foundations/Category Theory/Category of Matrices]]
[[Foundations/Category Theory/Monoid]]
[[Foundations/Category Theory/Groupoid]]
[[Foundations/Category Theory/Preorder Category]]
[[Foundations/Category Theory/Cateogry of Small Categories]]

