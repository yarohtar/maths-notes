Every non constant polynomial over $\mathbb{C}$ has a root in $\mathbb{C}$.

#### Proof
By contradiction.
Let $p(z)=z^n+a_{1}z^{n-1}+\dots+a_{n}$ with no root, $n\geq 1$ (wlog monic)

Take $R\gg 0$ st $R>\max\left( \sum \lvert a_{i} \rvert, 1 \right)$
On $\lvert z \rvert=R$, there can be no roots.
Let $p_{t}(z)=z^n+t(a_{1}z^{n-1}+\dots+a_{n})$ for $t\in[0,1]$.
Then $p_{t}$ also has no roots in $\lvert z \rvert=R$.
Define:
$$
\begin{align}

F:I\times I&\longrightarrow S^1 \\
(s,t) &\longrightarrow \frac{p_{t}(R e^{2\pi is}) / p_{t}(R)}{\lvert p_{t}(R e^{2\pi is}) / p_{t(R)} \rvert }
\end{align}
$$
Well defined because $p_{t}$ is non zero on $\lvert z \rvert=R$
$F(0,t)=F(1,t)=1$
$F$ is a [[XNotes/Homotopy]] of loops.

For $t=0$, get loop $s\to e^{2\pi ins}$ ie $[F(\cdot,0)]=n\in \pi_{1}(S^1,1)$
Set $f_{r}(s)=\frac{p(re^{2\pi is}) / p(r)}{\lvert p(re^{2\pi is}) / p(r) \rvert}$
well defined because $p$ is assumed to have no roots

$f_{R}(\cdot)=F(\cdot,1)$.

So $[f_{R}]=n\in \pi_{1}(S^1,1)$ (by homotopy invariance)

$f_{0}\equiv 1$ so $[f_{0}]=0\in \pi_{1}(S^1,1)$

$f_{r}(s)$ is a homotopy that gives $f_{R}\simeq f_{0}$ as loops, 
so $[f_{R}]=0$ which is a contradiction.

