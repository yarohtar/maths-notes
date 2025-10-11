We have seen that $p:\tilde{X}\to X$ is a path connected covering space
$x_{0}\in X$ and $\tilde{x}_{0}\in p ^{-1}(x_{0})$ the map $p_{*}:\pi_{1}(\tilde{X},\tilde{x}_{0})\to \pi_{1}(X,x_{0})$ is injective

So $p_{*}\pi_{1}(\tilde{X},\tilde{x}_{0})\leq \pi_{1}(X,x_{0})$ a subgroup

If $\tilde{x}_{0}'\in p ^{-1}(x_{0})$ is another basepoint of $\tilde{X}$, 
as $\tilde{X}$ path-connected, can choose a path $\gamma:\tilde{x}_{0}\leadsto \tilde{x}_{0}'$.
Then $p\circ \gamma$ is a loop in $X$ based at $x_{0}$, $[p\circ \gamma]\in \pi_{1}(X,x_{0})$
and 
$[p\circ \gamma]^{-1}\cdot p_{*}\pi_{1}(\tilde{X},\tilde{x}_{0})\cdot[p\circ \gamma]=p_{*}\pi_{1}(\tilde{X},\tilde{x}_{0}')\leq \pi_{1}(X,x_{0})$
ie the two subgroups obtained are conjugate.

So fixing $(X,x_{0})$ we have functions
$$
\{ \text{based covering maps }p:(\tilde{X},\tilde{x}_{0})\to(X,x_{0}) \}\to \{ \text{subgroups of }\pi_{1}(X,x_{0}) \}
$$
and 
$$
\left\{  \text{covering map }p:\tilde{X}\to X  \right\}\to \{ \text{conjugacy classes of subgroups of } \pi_{1}(X,x_{0})\}
$$
Want to show that imposing appropriate equivalence relations of LHSs, makes those into bijections.

### Proposition
Suppose that $X$ is path-connected, [[XNotes/Locally Path Connected]], and [[XNotes/Semi-locally Simply Connected]].
Then for any subgroup $H\leq \pi_{1}(X,x_{0})$ there is a covering space $p:(\tilde{X},x_{0})\to(X,x_{0})$ with $p_{*}\pi_{1}(\tilde{X},\tilde{x}_{0})=H$
#### Proof
Let $q:\bar{X}\to X$ be the [[XNotes/Universal Cover]] that we constructed, whose underlying set is the set of homotopy classes of paths in $X$ starting at $x_{0}$.
Define $\sim_{H}$ on $\bar{X}$ by $[\gamma]\sim_{H}[\gamma']$ iff $\gamma(1)=\gamma'(1)$ and $[\gamma \cdot(\gamma')^{-1}]\in H\leq \pi_{1}(X,x_{0})$
This is an equivalence relation
1. $[\gamma]\sim_{H}[\gamma]$ as $[c_{x_{0}}]\in H$ ($H$ contains the identity element)
2. $[\gamma]\sim_{H}[\gamma']$ then $[\gamma \cdot(\gamma')^{-1}]\in H$ so its inverse $[\gamma'\cdot \gamma ^{-1}]\in H$
3. $[\gamma]\sim_{H}[\gamma']\sim_{H}[\gamma'']$ then $[\gamma \cdot(\gamma')^{-1}]\in H$ and $[\gamma'\cdot(\gamma'')^{-1}]\in H$ so the product $[\gamma \cdot(\gamma'')^{-1}]\in H$.
So $\sim_{H}$ is an equivalence relation on $\bar{X}$

Define $\tilde{X}_{H}=\bar{X} / \sim_{H}$
and $p_{H}:\tilde{X}_{H}\to X$ to be the induced map $[[\gamma]]\to \gamma(1)$

If $[\gamma]\in(\alpha,U)$ and $[\gamma']\in(\beta,U)$ and $[\gamma]\sim_{H}[\gamma']$.
then $(\alpha,U)$ and $(\beta,U)$ are identified by $\sim _H$ 
as $[\gamma \cdot \eta]\sim_{H}[\gamma'\cdot \eta]$ for $\eta$ any path in $U$.
So $p_{H}$ is a covering map ($q^{-1}(U)=\sqcup(\alpha,U)$)

Need $(p_{H})_{*}\pi_{1}(\tilde{X}_{H},[[c_{x_{0}}]])=H\leq \pi_{1}(X,x_{0})$
If $[\gamma]\in H$ then the lift $\tilde{\gamma}$ of $\gamma$ to $\bar{X}$ starts at $[c_{x_{0}}]$ and ends at $[\gamma]\in \bar{X}$.

So the lift $\tilde{\gamma}$ to $\tilde{X}_{H}$ ends at $[[\gamma]]\sim_{H}[[c_{x_{0}}]]$, so it is a loop.
So $[\gamma]=(p_{H})_{*}[\tilde{\gamma}]$. So we have $\supseteq$.

Conversely, if $[\gamma]=(p_{H})_{*}([\tilde{\gamma}])$ then the lift of $\tilde{\gamma}$ to $\bar{X}$ starts at $[c_{x_{0}}]$ and ends at $[\gamma]$.

As $\tilde{\gamma}$ is a loop in $\tilde{X}_{H}$ we have $[\gamma]\sim_{H}[c_{x_{0}}]$ ie $[\gamma]\in H$. This shows $\subseteq$.


### Proposition (Based uniqueness)
Suppose that $X$ is path-connected, [[XNotes/Locally Path Connected]], and [[XNotes/Semi-locally Simply Connected]].
If $p_{1}:(\tilde{X}_{1},\tilde{x}_{1})\to(X,x_{0})$, $p_{2}:(\tilde{X}_{2},\tilde{x}_{2})$
are path connected covering spaces, there is a homomorphism
$h:(\tilde{X}_{1},\tilde{x}_{1})\to(\tilde{X}_{2},\tilde{x}_{2})$
st $p_{2}\circ h=p_{1}$ iff $(p_{1})_{*}\pi_{1}(\tilde{X}_{1},\tilde{x}_{1})=(p_{2})_{*}\pi_{1}(\tilde{X}_{2},\tilde{x}_{2})\leq \pi_{1}(X,x_{0})$

#### Proof
If $h$ exists then $(p_{2})_{*}h_{*}=(p_{1})_{*}$ and $h_{*}$ is an isomorphism, so $\mathrm{Im}(p_{1})_{*}=\mathrm{Im}(p_{2})_{*}$

For the other direction, let $H=(p_{1})_{*}\pi_{1}(\tilde{X}_{1},\tilde{x}_{1})$. Will show $\tilde{X}_{1}\cong \tilde{X}_{H}$ 

Consider $r:(\bar{X},[c_{x_{0}}])\to(\tilde{X},\tilde{x}_{1})$
with $[\gamma]\to$ the end point of the lift $\tilde{\gamma}\circ f \gamma$ to $\tilde{X}_{1}$ which starts at $\tilde{x}_{1}$.
Now $r([\gamma])=r([\gamma'])$ iff $\tilde{\gamma}$ and $\tilde{\gamma}'$ end at the same point
iff $[\gamma'\cdot \gamma ^{-1}]\in(p_{1})_{*}\pi_{1}(\tilde{X}_{1},\tilde{x}_{1})=H$
iff $[\gamma]\sim_{H}[\gamma']$
so the induced map $q:(\tilde{X}_{H},[[c_{x_{0}}]])\to(\tilde{X}_{1},\tilde{x}_{1})$
is a continuous bijection and an open map as both covering maps to $X$ are local homeomorphisms.

### Proposition (Unbased uniqueness)
If $p_{1}:\tilde{X}_{1}\to X$ and $p_{2}:\tilde{X}_{2}\to X$ are path connected covering spaces, then there is a homeomorphism $h:\tilde{X}_{1}\to \tilde{X}_{2}$
st $p_{2}\circ h=p_{1}$ iff $(p_{1})_{*}\pi_{1}(\tilde{X}_{1},\tilde{x}_{1})$ is conjugate to $(p_{2})_{*}\pi_{1}(\tilde{X}_{2},\tilde{x}_{2})$ in $\pi_{1}(X,x_{0})$