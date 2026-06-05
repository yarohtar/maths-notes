$X$ is simply connected if 
- it is [[Homotopy/Path Components\|path connected]]
- its [[Homotopy/Fundamental group\|fundamental group]] is trivial in some (hence all) basepoints.

### Lemma
$X$ simply connected $\iff$ For each pair of points $x_{0},x_{1}\in X$ there is a unique homotopy class of [[Homotopy/Paths\|paths]] between them.
#### Proof
$(\implies)$ Suppose $X$ is simply connected. Let $x_{0},x_{1}\in X$. $X$ is path connected so have path $x_{0}\leadsto x_{1}$. Suppose $\gamma,\gamma':x_{0}\leadsto x_{1}$. Then $\gamma ^{-1}\cdot \gamma$ is a loop based at $x_{0}$. 
$[\gamma ^{-1}\cdot \gamma]\in \pi_{1}(X,x_{0})=\{ [c_{x_{0}}] \}$. So $\gamma ^{-1}\cdot \gamma'\simeq c_{x_{0}}$ relative to the endpoints
$\implies \gamma'\simeq \gamma \cdot c_{x_{0}}\simeq \gamma$ as loops based at $x_{0}$
$(\impliedby)$ Existence of paths between any 2 points implies $X$ is path connected. Suppose $\gamma$ is a loop based at $x_{0}$. The loop is homotopic to the constant loop at $x_{0}$ so $\pi_{1}(X,x_{0})=\{ * \}$.