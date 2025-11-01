Let $\mathcal{U},\mathcal{V}$ be [[Topology/Topological space]]s
We say that $f:\mathcal{U}\to \mathcal{V}$ is continuous if
for any open $V\subseteq \mathcal{V}$:
$$
f^{-1}(V)=\{ u\in \mathcal{U} : f(u)\in V \}
$$
is open in $\mathcal{U}$.

### Lemma
Let $(X,d_{1})$ and $(Y,d_{2})$ be [[Analysis/Metric Space]]s.
Then $f$ is continuous 
if and only if 
$$
(\forall \epsilon>0) (\forall x,y\in X) (\exists \delta>0)\, d_{1}(x,y)<\delta \implies d_{2}(x,y) < \epsilon
$$
