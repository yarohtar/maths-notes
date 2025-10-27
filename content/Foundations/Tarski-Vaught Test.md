Let $\mathcal{L}$ be any [[Foundations/First Order Logic/Language]].
Let $M$ and $N$ be $\mathcal{L}$-[[Foundations/First Order Logic/Structure]]s 
such that $M$ is a [[Foundations/Substructure]] of $N$.
Let $\Phi$ be a set of $\mathcal{L}$-formulas closed under subformulas.
Then all formulas in $\Phi$ are [[Foundations/Absolute]] between $M$ and $N$ 
if and only if
for any formula $\exists x\,\phi \in \Phi$ where $\phi$ has $n+1$ [[Foundations/First Order Logic/Free Variable]]s including $x$
and for any $m_{1},\dots,m_{n}\in M$ such that $N\models \exists x\,\phi(m_{1},\dots,m_{n})$
there is some $m\in M$ such that 
$$
N\models \phi(m,m_{1},\dots,m_{n})
$$
