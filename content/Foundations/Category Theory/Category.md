---
publish: true
aliases:
  - Categories
created: 2026-10-11T21:45:33.290Z
modified: 2026-10-11T21:45:33.290Z
---

A category $\mathcal{C}$ consists of

1. a collection of $\operatorname{ob}\mathcal{C}$  of [[Object]]s $A, B, C,\dots$
2. a collection $\operatorname{mor}\mathcal{C}$ of [[Morphism]]s $f,g,h, \dots$
3. two operations $\operatorname{dom}$ and $\operatorname{cod}$ sending morphisms to objects
   we write $A\xrightarrow{f} B$ to mean $\operatorname{dom} f=A$ and $\operatorname{cod}f=B$
4. An operation sending $A$ to $1_{A}$ where $A\xrightarrow 1_{A}A$
5. A partial binary operation on morphisms $(f,g)\to fg$ such that:

$$
fg \text{ defined} \iff \operatorname{dom}f=\operatorname{cod}g
$$

and then $\operatorname{dom}fg=\operatorname{dom}g$ and $\operatorname{cod}fg =\operatorname{cod}f$
subject to:
6\. $f 1_{A}=f$ and $1_{A}g=g$ whenever the composites are defined
7\. [[Associativity]]: $f(gh)=(fg)h$ whenever $fg$ and $gh$ are defined

[[Isomorphism]]
[[Small Category]]
[[Quotient Category]]
[[Opposite Category]]
[[Functor]]
[[Skeletal]]
[[Balanced]]

### Examples

[[Category of Sets]]
[[Category of Relations]]
[[Category of Partial Functions]]
[[Category of Groups]]
[[Category of Rings]]
[[Category of Vector Spaces]]
[[Category of Topological Spaces]]
[[Category of Metric Spaces]]
[[Category of Smooth Manifolds]]
[[Category of Topological Groups]]
[[Category of Homotopy]]
[[Category of Matrices]]
[[Monoid]]
[[Groupoid]]
[[Preorder Category]]
[[Cateogry of Small Categories]]
