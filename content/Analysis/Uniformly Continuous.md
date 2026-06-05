Let $(X,d_{1})$ and $(Y,d_{2})$ be [[Analysis/Metric space]]s.
A function $f:X\to Y$ is uniformly continuous if
$$
(\forall \epsilon>0)\, (\exists \delta>0) (\forall x,y\in X)\, d_{1}(x,y)<\delta \implies d_{2}(x,y)<\epsilon
$$
### Lemma
If $f$ is uniformly continuous then it is [[Topology/Continuous]].
### Theorem
If $f$ is continuous on a closed interval $[a,b]$ 
then it is uniformly continuous on $[a,b]$.
#### Proof sketch
Suppose otherwise. 
Choose a "bad" $\epsilon$ and $\delta_n=\frac 1 n$, along with $x_n,y_n$. 
Use [[Analysis/Boltzano-Weierstrass theorem\|BWT]] to find convergent $x_{k_n}\to x$ (which has to stay in the closed interval). 
Then also $y_{k_n}\to x$. 
Now find a contradiction with continuity at $x$.

### Theorem 
If $f$ is continuous on $[a,b]$ then it is [[Analysis/Riemann Integrable]] on $[a,b]$.
#### Proof sketch
By previous theorem, $f$ is uniformly continuous. 
Now choose a dissection $D=x_1<x_2<\dots<x_n$ s.t. $x_{i+1}-x_i<\delta$. 
Write out $U$ and $L$ and bind them appropriately - done.