Let $f:\{ 0,1 \}^{n}\to \mathbb{R}$ be a function on $p$-[[Analysis of Boolean Functions/Biased Cube]] with $J\subseteq[n]$ and $u\in \{ 0,1 \}^{J}$.
Define $f_{u}:\{ 0,1 \}^{[n]\setminus J}\to \mathbb{R}$ by $f_{u}(y)=f(x)$ where $x|_{J}=u$ and $x|_{[n]\setminus J}=y$.
The averaging projection $E_{J}$ is defined by
$$
E_{J}f^{(p)}(x) = \mathop{\mathbb{E}}f_{u}^{(p)}
$$
where $u=x|_{J}$.
Note $E_{J}f(x)$ depends only on coordinates in $J$.
### Lemma
Each $E_{J}$ is self-[[Analysis/Hilbert Space/Adjoint]].
#### Proof
$$
\begin{align}
\braket{ E_{J}f | g }  & =\mathop{\Large\mathbb{E}}\limits_{x} \ E_{J}f(x)g(x)  \\
 & = \mathop{\Large\mathbb{E}}\limits_{u\in \{ 0,1 \}^{J}} \mathop{\Large\mathbb{E}}\limits_{y\in \{ 0,1 \}^{[n]\setminus J}} (\mathop{\mathbb{E}}f_{u}) g_{u}(y) \\
 & = \mathop{\Large\mathbb{E}}\limits_{u} (\mathop{\mathbb{E}}f_{u}) \mathop{\Large\mathbb{E}}\limits_{y} g_{u}(y) \\
 & = \mathop{\Large\mathbb{E}}\limits_{u} (\mathop{\mathbb{E}}f_{u}) (\mathop{\mathbb{E}}g_{u})
\end{align}
$$
so we are done by symetry.
### Lemma
Each $E_{J}$ is an orthogonal projection and if $J\subseteq K$ then $E_{J}E_{K}=E_{J}$
#### Proof
Since $(f_{u})_{u}=f_{u}$ we have $E_{J}^{2}=E_{J}$.
To prove orthogonality we need
$$
\braket{ f | E_{J}f } = \braket{ E_{J}f | E_{J}f } 
$$
But this is clear as $E_{J}$ is self-[[Analysis/Hilbert Space/Adjoint]].
Now let $J\subseteq K$ and let $L=K\setminus J$.
We will take $u\in \{ 0,1 \}^{J}$, $v\in \{ 0,1 \}^{L}$ and $z\in \{ 0,1 \}^{[n]\setminus K}$ and $x=(u,v,z)$.
$$
E_{J}E_{K}f(x) = E_{J} \left( \mathop{\Large\mathbb{E}}\limits_{z} f(u,v,z) \right) =\mathop{\Large\mathbb{E}}\limits_{v,z} f(u,v,z) = E_{J} f(x)
$$