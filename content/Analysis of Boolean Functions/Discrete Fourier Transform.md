Let $G$ be a [[Algebra/Group Theory/Finite Abelian Group]].
In the space $\mathbb{C}^{G}$ define the inner product of $f,g:G\to \mathbb{C}$ as:
$$
\braket{ f | g } = \mathop{\Large\mathbb{E}}\limits_{x\in G}f(x)\overline{g(x)}
$$
and the $l_{2}$ norm:
$$
\lVert f \rVert _{2} = \left( \mathop{\Large\mathbb{E}}\limits_{x\in G}\lvert f(x) \rvert ^{2} \right)^{1/2}
$$
Also 
$$
\lVert f \rVert _{p}=\left( \mathop{\Large\mathbb{E}}\limits_{x\in G}\lvert f(x) \rvert ^{p} \right)^{1/p}
$$
for $1\leq p\leq \infty$
This space has an [[Analysis/Orthonormal Basis]] given by the [[Analysis of Boolean Functions/Character]]s.
Let $\hat{G}$ be the [[Analysis of Boolean Functions/Pontryagin Dual]] of $G$.
In the space $\mathbb{C}^{\hat{G}}$ we define the inner product of $f,g:\hat{G}\to \mathbb{C}$ as:
$$
\braket{ f | g } = \sum_{\chi \in \hat{G}}\hat{f}(\chi)\overline{\hat{g}(\chi)} 
$$
and 
$$
\lVert f \rVert _{p} = \left( \sum_{\chi \in \hat{G}} \hat{f}(\chi)^{p} \right)^{1/p}
$$
Let $f:G\to \mathbb{C}$. The Fourier Transform of $f$ is a function $\hat{f}:\hat{G}\to \mathbb{C}$ given by:
$$
\hat{f}(\chi)=\mathop{\Large\mathbb{E}}\limits_{x\in G} f(x)\overline{\chi(x)} = \braket{ f | \chi } 
$$
### Lemma
[[Analysis/Hilbert Space/Parseval's Identity]]:
$$
\braket{ \hat{f} | \hat{g} } =\braket{ f | g } 
$$
#### Proof
$$
\begin{align}
\braket{ \hat{f} | \hat{g} } &=\sum_{\chi}\hat{f}(\chi)\overline{\hat{g}(\chi)} \\
&= \sum_{\chi} \left( \mathop{\Large\mathbb{E}}\limits_{x} f(x)\overline{\chi(x)} \right)\overline{\left( \mathop{\Large\mathbb{E}}\limits_{y}g(y)\overline{\chi(y)} \right)} \\
&=\mathop{\Large\mathbb{E}}\limits_{x,y} f(x)\overline{g(y)} \sum_{\chi} \chi(x ^{-1}y)  \\
&= \mathop{\Large\mathbb{E}}\limits_{x,y} f(x)\overline{g(y)} \Delta_{xy} \\
&=\braket{ f | g } 
\end{align}
$$
### Lemma
Define 
$$
f*g(x) = \mathop{\Large\mathbb{E}}\limits_{uv=x}f(u)g(v)
$$
Then
$$
\widehat{f*g}(\chi)=\hat{f}(\chi)\hat{g}(\chi)
$$
#### Proof
$$
\begin{align}
\widehat{f*g}(\chi)&= \mathop{\Large\mathbb{E}}\limits_{x} f*g(x) \overline{\chi(x)}  \\
&=\mathop{\Large\mathbb{E}}\limits_{x}\mathop{\Large\mathbb{E}}\limits_{uv=x}f(u)g(v)\overline{\chi(x)} \\
&=\mathop{\Large\mathbb{E}}\limits_{u,v} f(u)g(v)\overline{\chi(u)} \overline{\chi(v)} \\
&=\hat{f}(\chi)\hat{g}(\chi)
\end{align}
$$
### Lemma
$$
f(x) = \sum_{\chi \in \hat{G}}\hat{f}(\chi)\chi(x)
$$
#### Proof
$$
\begin{align}
\sum_{\chi \in \hat{G}} \hat{f}(\chi)\chi(x) &= \sum_{\chi} \mathop{\Large\mathbb{E}}\limits_{y}f(y)\overline{\chi(y)} \chi(x) \\
&=\mathop{\Large\mathbb{E}}\limits_{y}f(y) \sum_{\chi} \chi(xy^{-1}) \\
&=\mathop{\Large\mathbb{E}}\limits_{y} f(y) \Delta_{xy} \\
&=f(x)
\end{align}
$$










