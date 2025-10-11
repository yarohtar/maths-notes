A category $\mathcal{C}$ consists of
1. a collection of $\operatorname{ob}\mathcal{C}$  of objects $A, B, C,\dots$
2. a collection $\operatorname{mor}\mathcal{C}$ of morphisms $f,g,h, \dots$ 
3. two operations $\operatorname{dom}$ and $\operatorname{cod}$ sending morphisms to objects
   we write $A\xrightarrow{f} B$ to mean $\operatorname{dom} f=A$ and $\operatorname{cod}f=B$
4. An operation sending $A$ to $1_{A}$ where $A\xrightarrow 1_{A}A$
5. A partial binary operation on morphisms $(f,g)\to fg$ s.t.
$$
fg \text{ defined} \iff \operatorname{dom}f=\operatorname{cod}g
$$
and then $\operatorname{dom}fg=\operatorname{dom}g$ and $\operatorname{cod}fg =\operatorname{cod}f$
subject to:
6. $f 1_{A}=f$ and $1_{A}g=g$ whenever the composites are defined
7. $f(gh)=(fg)h$ whenever $fg$ and $gh$ are defined
### Examples
[[Foundations/Category of Sets]]
[[Foundations/Category of Relations]]
[[Foundations/Category of Partial Functions]]
[[Foundations/Category of Groups]]
[[Foundations/Category of Rings]]
[[Foundations/Category of Vector Spaces]]
[[Foundations/Category of Topological Spaces]]
[[Foundations/Category of Metric Spaces]]
[[Foundations/Category of Smooth Manifolds]]
[[Foundations/Category of Topological Groups]]
[[Foundations/Category of Homotopy]]
[[XNotes/Monoid]]
[[XNotes/Groupoid]]
[[XNotes/Preorder Category]]
