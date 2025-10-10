### Lemma
Let $p:\tilde{X}\to X$ be a [[Notes/Covering Spaces\|covering map]] with $x_{0}\in X$, $\tilde{x}_{0}\in p ^{-1}(x_{0})$.
Then $p_{*}:\pi_{1}(\tilde{X},\tilde{x}_{0})\to \pi_{1}(X,x_{0})$ is injective 
(where $p_{*}$ is the natural [[Notes/Fundamental group isomorphisms\|homomorphism]] induced by $p$).

### Definition
The (right) group action of fundamental group $\pi_{1}(X,x_{0})$ on $p ^{-1}(x_{0})$ 
is defined as:
$$
\tilde{x}_{0}\cdot[\gamma]=\gamma_{*}(\tilde{x}_{0})
$$
where $\gamma_{*}$ is the [[Notes/Path Push Forward]] of $\gamma$.
### Lemma
Let $p:\tilde{X}\to X$ be a covering map, $X$ path connected.
Then:
1. $\pi_{1}(X,x_{0})$ acts transitively on $p ^{-1}(x_{0})$ iff $\tilde{X}$ is path connected
2. Stabiliser of $y_{0}\in p ^{-1}(x_{0})$ is $\mathrm{Im}(p_{*}:\pi_{1}(\tilde{X},y_{0})\to \pi_{1}(X,x_{0}))$
3. If $\tilde{X}$ is path connected, have bijection:
$$
\pi_{1}(X,x_{0}) / p_{*}(\pi_{1}(\tilde{X},y_{0}))\longrightarrow p ^{-1}(x_{0})
$$
induced by $\cdot$ on $y_{0}$

### Corollary
Suppose $p:\tilde{X}\to X$ is a [[Notes/Universal Cover\|universal cover]]. 
Then each point $\tilde{x}_{0}\in p ^{-1}(x_{0})$ determines a bijection $\pi_{1}(X,x_{0})\to p ^{-1}(x_{0})$ 
given by $[\gamma]\to \tilde{x}_{0}\cdot [\gamma]$.
#### Proof
Immediate from previous lemma.