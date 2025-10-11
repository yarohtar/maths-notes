A map $f:M\to M'$ is a contraction mapping if it is $L$-[[XNotes/Lipschitz]] with $L<1$.

## Banach Fixed Point Theorem
Let $f$ be a contraction mapping in a nonempty complete metric space. Then $f$ has a unique fixpoint.
### Proof sketch
Define a sequence $x_{n+1}=f(x_n)$. This sequence is Cauchy. Hence converges to some $x$. But then also $f(x_n)$ converges to $x$, as $f$ is continuous. But also by uniqueness of limits, $f(x_n)=x_{n+1}$ converges to $x$ so $f(x)=x$. 
Suppose $f(y)=y$. Then $d(x,y)=d(f(y),f(x))\leq Ld(x,y)$
so $d(x,y)=0$ so $x=y$, hence unique.