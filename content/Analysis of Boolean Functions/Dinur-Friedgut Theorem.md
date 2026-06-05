For $p\in\left( 0,\frac{1}{2} \right)$ and $\epsilon>0$ there is some $T\in \mathbb{N}$ 
such that for any [[Analysis of Boolean Functions/Intersecting Family]] $\mathcal{A}$ of subsets of $[n]$ 
there exists $J\subseteq[n]$ of size at most $T$ 
and an [[Analysis of Boolean Functions/Intersecting Family]] $\mathcal{B}$ of subsets of $J$ 
such that 
$$
\mu_{p} (\mathcal{A}\setminus \bar{\mathcal{B}}) \leq \epsilon
$$
where $\bar{\mathcal{B}}$ is the [[Foundations/Poset/Upward Closure]] of $\mathcal{B}$ (in terms of $\subseteq$).
#### Proof
Let $f:\{ 0,1 \}^{n}\to \{ 0,1 \}$.
Apply the [[Analysis of Boolean Functions/Regularity Lemma for Boolean Functions]] with parameters $\left( \frac{\epsilon}{10},p,r,\frac{\epsilon}{2} \right)$ 
where $r$ is to be chosen.
That gives us some $J$ of size at most $T(\epsilon,p,r)$ such that if $u$ is chosen $\mu_{p}$-randomly from $\{ 0,1 \}^{J}$
then
$$
\mathbb{P}\left( f_{u}^{(p)} \text{ is not $\left( \frac{\epsilon}{10},p,r \right)$-QR} \right)\leq \frac{\epsilon}{2}
$$
Define 
$$
g:\{ 0,1 \}^{J} \to \{ 0,1 \}
$$
by setting $g(u)=1$ if $f_{u}^{(p)}$ is $\left( \frac{\epsilon}{10},p,r \right)$-[[Analysis of Boolean Functions/Quasirandom Boolean Function]] and $\mathop{\mathbb{E}}f_{u}^{(p)}\geq \frac{\epsilon}{2}$ and $g(u)=0$ otherwise
Then 
$$
\mathbb{P}(f^{(p)}(x)=1 \land g(x|_{J})=0) \leq \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
$$
(because we have $\frac{\epsilon}{2}$ for $f_{u}^{(p)}$ to not be quasirandom and another $\frac{\epsilon}{2}$ if its sparse)
This corresponds to the statement that
$$
\lvert \mathcal{A} \setminus \bar{\mathcal{B}} \rvert \leq \epsilon
$$
Note that $\bar{\mathcal{A}}$ is an [[Analysis of Boolean Functions/Intersecting Family]] and $\lvert \bar{\mathcal{A}}\setminus  \bar{\mathcal{B}} \rvert \geq \lvert \mathcal{A}\setminus  \bar{\mathcal{B}} \rvert$  
so we may assume that $f$ is monotone and hence each $f_{u}$ is monotone.
It remains to prove that $g$ is [[Analysis of Boolean Functions/Intersecting Family]].
Let $u,v\in \{ 0,1 \}^{J}$ such that $g(u)=g(v)=1$.
Then $f_{u}$ and $f_{v}$ are $\left( \frac{\epsilon}{10},p,r\right)$-[[Analysis of Boolean Functions/Quasirandom Boolean Function]]s
and $\mathop{\mathbb{E}}f^{(p)}_{u},\mathop{\mathbb{E}}f_{v}^{(p)}\geq \frac{\epsilon}{2}$.
It follows that for appropriate $r$ we have 
$$
\mathop{\mathbb{E}}f_{u}^{(1/2)}, \mathop{\mathbb{E}}f_{v}^{(1/2)} > \frac{1}{2}
$$
By averaging we can find $y,z\in \{ 0,1 \}^{[n]\setminus J}$ such that $y_{i}=1\iff z_{i}=0$ 
and $f_{u}(y)=f_{v}(z)=1$.
Since $f$ is intersecting there must exist $i\in J$ such that $u_{i}=v_{i}=1$ so $g$ is [[Analysis of Boolean Functions/Intersecting Family]].

### Corollary
For every $p\in\left( 0,\frac{1}{2} \right)$ and $\epsilon>0$ 
there is some $m$ such that for every $n\in \mathbb{N}$ and every [[Analysis of Boolean Functions/Intersecting Family]] $\mathcal{A}\subseteq[n]^{(r)}$ where $r=pn$ 
there is some $J\subseteq[n]$ with $\lvert J \rvert\leq m$
and an [[Analysis of Boolean Functions/Intersecting Family]] $\mathcal{B}$ of subsets of $J$ 
such that
$$
\lvert \mathcal{A}\setminus  \bar{\mathcal{B}} \rvert \leq \epsilon \binom{ n }{ r }
$$
#### Proof
Suppose not.
Let $\mathcal{C}=\mathcal{A}\setminus  \bar{\mathcal{B}}$.
Then $\mathcal{C}$ has density at least $\epsilon$.
Apply Dinur-Friedgut to $\bar{\mathcal{A}}$ to obtain $J$ 
and intersecting family $\mathcal{B}$ of subsets of $J$ with $\mu_{p}(\bar{\mathcal{A}}\setminus  \bar{\mathcal{B}})\leq \frac{\epsilon}{4}$.
Note that since $\mathcal{C}\cap  \bar{\mathcal{B}}=\varnothing$
we find 
$$
\partial_{J}^{s} \mathcal{C} \cap  \bar{\mathcal{B}} =\varnothing
$$
for every $s>r$
Also if $s\leq r+n^{2/3}$ then using [[Analysis of Boolean Functions/LYM Inequality]]:
$$
\frac{ \lvert \partial_{J}^{s} \rvert  }{ \binom{ n }{ s } } \geq \epsilon\left( 1-\frac{ 2\lvert J \rvert  }{ n } \right)^{n^{2/3}} \geq \frac{ 3\epsilon }{ 4 }
$$
for $n$ sufficiently large.
But 
$$
\mu_{p}(\bar{\mathcal{C}}) = \sum_{s\geq r} \mu_{p} ([n]^{(s)}) \cdot \left( \frac{ \lvert \partial_{J}^{s}\mathcal{C}  \rvert  }{ \binom{ n }{ s } } \right)
\geq \frac{ 3\epsilon }{ r } \sum_{r\leq s\leq n^{2/3}} \mu_{p}([n]^{(s)}) 
\geq \frac{ 5\epsilon }{ 16 }
$$
But $\bar{\mathcal{C}}\subseteq  \bar{\mathcal{A}} \setminus  \bar{\mathcal{B}}$ so this is a contradiction (as $\lvert \bar{\mathcal{A}}\setminus  \bar{\mathcal{B}}\rvert \leq \frac{\epsilon}{4}$)