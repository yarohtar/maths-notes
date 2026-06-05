Let $X$ and $Y$ be sets and define 
$$
\mathbb{P} = \mathrm{Fn}(X,Y) = \{ p\subseteq X\times Y: (p:X\dashrightarrow Y) \land \lvert p \rvert <\aleph_{0} \}
$$
i.e. $p$ is a finite [[Foundations/Computability/Partial Function]] from $X$ to $Y$.
Furthermore, define 
$$
p\leq q \iff p \supseteq q
$$
and set $\mathbb{1}=\varnothing$.
Then $(\mathbb{P},\leq,\mathbb{1})$ is a [[Foundations/Forcing/Forcing Partial Order]].
### Lemma
For $p,q\in \mathbb{P}$, they are [[Foundations/Poset/Incompatible]]
if and only if 
$$
(\exists x\in \mathrm{dom}(p)\cap \mathrm{dom}(q))\ p(x)\neq q(x)
$$
### Lemma
If $F$ is a [[Foundations/Poset/Filter Base]] then 
$$
\{ (x,y) : (\exists p\in F)\, (x,y)\in p \}
$$
is a function. 
Furthermore, if $F$ is a [[Foundations/Poset/Filter]] then $\bigcup F$ is a function.
### Lemma
For any $x\in X$ define:
$$
\begin{gather}
D_{x} = \{ p\in \mathbb{P} : x \in \mathrm{dom}(p) \} \\
\mathcal{D}_{0} = \{ D_{x} : x\in X \}
\end{gather}
$$
and for $y\in Y$ define:
$$
\begin{gather}
R_{y} = \{ p\in \mathbb{P} : y\in \mathrm{ran}(p) \} \\
\mathcal{D}_{1} = \{ R_{y} : y\in Y \}
\end{gather}
$$
Then $D_{x}$ is [[Foundations/Poset/Dense Below\|Dense]], 
and $R_{y}$ is [[Foundations/Poset/Dense Below\|Dense]] when $X$ is infinite.
Furthermore, if $F$ is a $\mathcal{D}_{0}$-[[Foundations/Forcing/Generic Filter]] then 
$$
\mathrm{dom}\left( \bigcup F \right) = X
$$
and if $G$ is a $\mathcal{D}_{1}$-[[Foundations/Forcing/Generic Filter]] and $X$ is infinite then 
$$
\mathrm{ran}\left( \bigcup G \right) = Y
$$
### Lemma
Let $X$ be infinite.
Fix $f:X\to Y$ and define 
$$
N_{f} = \big\{ p\in \mathbb{P} : (\exists x\in \mathrm{dom}(p))\, f(x)\neq p(x) \big\}
$$
Then $N_{f}$ is [[Foundations/Poset/Dense Below\|Dense]].
Furthermore, if $F$ is a $\{ N_{f} \}$-[[Foundations/Forcing/Generic Filter]] then 
$$
\bigcup F \neq f
$$
