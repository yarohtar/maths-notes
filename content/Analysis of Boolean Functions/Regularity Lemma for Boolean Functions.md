For every $(\epsilon,p,r,\delta)$ there exists $T\in \mathbb{N}$
such that for every $f:\{ 0,1 \}^{n}\to \{ 0,1 \}$ on $p$-[[Analysis of Boolean Functions/Biased Cube]]
there exists $J\subseteq[n]$ with $\lvert J \rvert\leq T$ 
such that if $u$ is chosen randomly from $\{ 0,1 \}^{J}$ 
then the probability that $f_{u}$ is a $(\epsilon,p,r)$-[[Analysis of Boolean Functions/Quasirandom Boolean Function]] is at least $1-\delta$.
#### Proof
Suppose that $J$ doesn't satisfy the conclusion of the lemma.
Let $u\in \{ 0,1 \}^{J}$ and $K\subseteq[n]\setminus J$. 
If $f_{u}$ is not a $(\epsilon,p,r)$-[[Analysis of Boolean Functions/Quasirandom Boolean Function]], 
then there is some $K_{u}\subseteq[n]\setminus J$ with $\lvert K_{u} \rvert\leq r$ and some $v\in \{ 0,1 \}^{K_{u}}$ such that 
$$
\lvert \mathop{\mathbb{E}}f_{u,v}^{(p)} - \mathop{\mathbb{E}}f_{u}^{(p)} \rvert \geq \epsilon
$$
Let $\zeta=\min\{ p,1-p \}$.
If we choose a random element of $\{ 0,1 \}^{K_{u}}$ then it equals $v$ with probability $\geq \zeta^{r}$
Therefore:
$$
\mathop{\Large\mathbb{E}}\limits_{w} \lvert \mathop{\mathbb{E}}f_{u,w}^{(p)} - \mathop{\mathbb{E}}f_{u}^{(p)} \rvert ^{2} \geq \epsilon^{2}\zeta^{r}
$$
Also note that 
$$
\mathop{\Large\mathbb{E}}\limits_{w} (\mathop{\mathbb{E}}f_{u,w}^{(p)} - \mathop{\mathbb{E}}f_{u}^{(p)}) = 0
$$
so LHS is the variance of $\mathop{\mathbb{E}}f_{u,v}-\mathop{\mathbb{E}}f_{u}$ over random $v$.
As $\mathop{\mathbb{E}}f_{u}$ is constant here, this variance has to be equal to
$$
\mathop{\Large\mathbb{E}}\limits_{w} (\mathop{\mathbb{E}}f_{u,w})^{2} - \left( \mathop{\Large\mathbb{E}}\limits_{w}f_{u,w} \right)^{2} = \lVert E_{K_{u}} f \rVert _{2}^{2} - (\mathop{\mathbb{E}}f_{u})^{2}
$$
so 
$$
\lVert E_{K_{u}}f_{u} \rVert _{2}^{2} \geq (\mathop{\mathbb{E}}f_{u})^{2} + \zeta^{r}\epsilon^{2}
$$
in this case.
Let 
$$
K=\bigcup_{u} K_{u}
$$
where the union is over all $u$ such that $f_{u}$ is not a $(\epsilon,p,r)$-[[Analysis of Boolean Functions/Quasirandom Boolean Function]].
We conclude 
$$
\lVert E_{K}f_{u} \rVert _{2}^{2} \geq (\mathop{\mathbb{E}}f_{u})^{2} + \zeta^{r}\epsilon^{2}
$$
Now note that a random $u\in \{ 0,1 \}^{J}$ has probability at least $\delta$ to satisfy the above.
Also [[Analysis of Boolean Functions/Mean Square Density]] satisfies for any $u\in \{ 0,1 \}^{J}$:
$$
\lVert E_{K}f_{u} \rVert_{2}^{2} \geq \lVert E_{\varnothing}f_{u} \rVert _{2}^{2} = (\mathop{\mathbb{E}}f_{u})^{2}
$$
Thus averaging over all $u\in \{ 0,1 \}^{J}$ we get:
$$
\mathop{\Large\mathbb{E}}\limits_{u} \lVert E_{K}f_{u} \rVert _{2}^{2} \geq \mathop{\Large\mathbb{E}}\limits_{u}(\mathop{\mathbb{E}}f_{u})^{2} + \delta \zeta^{r}\epsilon^{2}
$$
i.e. 
$$
\lVert E_{J\cup K} f\rVert _{2}^{2} \geq \lVert E_{J}f \rVert _{2}^{2} + \delta \zeta^{r}\epsilon^{2}
$$
Now do an iteration.
Start with $J_{0}=\varnothing$.
At $i$-th stage, if $J_{i}$ doesn't work, replace it with $J_{i+1}=J_{i}\cup K_{i}$ using $K_{i}$ such that 
$$
\lVert E_{J_{i}\cup K_{i}}f\rVert _{2}^{2} \geq \lVert E_{J_{i}}f\rVert _{2}^{2} + \delta \zeta^{r}\epsilon^{2} \geq \dots \geq (\mathop{\mathbb{E}}f)^{2} + i\delta \zeta^{r}\epsilon^{2}
$$
Thus the process must eventually terminate (as we cannot exceed $\lVert E_{[n]}f \rVert_{2}^{2}=\lVert f \rVert_{2}^{2}$)
##### Remark
The bound on $T$ is horrible. We can only get $\lvert K_{i} \rvert\leq r\cdot 2^{\lvert J_{i} \rvert}$.

