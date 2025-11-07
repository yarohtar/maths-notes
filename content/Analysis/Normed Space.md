Let $X$ be a real or complex vector space with [[Analysis/Norm]] $\lVert \cdot \rVert$
A normed space is a pair $(X,||\cdot||)$

NOTE: a normed space gives rise to a [[Analysis/Metric Space\|metric space]] with $d(x,y)=||x-y||$. 
This then induces a [[Topology/Topological Space]].
So we can talk about open sets, closed sets, convergent sequences etc.

[[Analysis/L norms]]
[[Analysis/Banach Space]]
[[Analysis/Metric Space#Some properties]]
[[Analysis/Unit Ball]]

[[Topology/Separable]]

[[Analysis/Equivalent Norms]]

[[Analysis/Open Mapping Lemma]]

## New spaces from old 
For normed spaces $X$ and $Y$ can define a norm on $X\oplus Y$ by:
$\lVert (x,y) \rVert =\lVert x \rVert+\lVert y \rVert$
This space is written $X\oplus_{1}Y$

Similarly, have $X\oplus_{2}Y$ with $\lVert (x,y) \rVert=(\lVert x \rVert^2+\lVert y \rVert^2)^{1/2}$ 
And similarly for any $p$.

All are equivalent and all induce the product topology on $X\oplus Y$
Note that $X$ and $Y$ being [[Analysis/Banach Space]] $\implies$ $X\oplus Y$ is Banach.
And also that $X$ and $Y$ are always closed subspaces of $X\oplus Y$

[[Analysis/Quotients]]
[[Analysis/Completion]]