Let $A,B,C\subseteq \mathbb{Z}$.
Then 
$$
\lvert A-C \rvert \leq \frac{ \lvert A-B \rvert \lvert B-C \rvert  }{ \lvert B \rvert  }
$$
### Proof
Define functions $a:A-C\to A$ and $c:A-C\to C$ by $a(x)-c(x)=x$
Also define $f:(A-C)\times B\to(A-B)\times(B-C)$ by 
$$
f(x,y) = (a(x)-y, y-c(x))
$$
We now just need to show that $f$ is injective.
Suppose $f(x,y)=f(x',y')$.
Then 
$$
\begin{gather}
a(x)-a(x')=y-y' \\
y-y'=c(x)-c(x')
\end{gather}
$$
so we conclude 
$$
a(x)-c(x) = a(x')-c(x')
$$
But by definition $x=a(x)-c(x)$ and $x'=a(x')-c(x')$, so $x=x'$.
It trivially follows that $y=y'$, so $f$ is injective.
### Theorem
Let $X$, $Y$, $Z$ be [[Probability/Random Variable]]s.
Then [[Information Theory/Mathematical Entropy]] satisfies: 
$$
H(X-Z) + H(Y) \leq H(X-Y) + H(Y-Z)
$$
#### Proof
By [[Information Theory/Data Processing Property of the Mutual Information]]: 
$$
I(X;X-Y,Y-Z) \geq I(X;X-Z)
$$
and the inequality will follow.
### Corollary
Let $X$ and $X'$ be iid.
Then 
$$
\frac{1}{2} \leq \frac{ H(X+X')-H(X) }{ H(X-X') - H(X) }
$$
#### Proof
Firstly, for any $Y$:
$$
H(X-X') + H(Y) \leq H(X-Y) + H(Y-X')
$$
so taking $Y\sim-X$ with $Y$ iid with $X$ and $X'$ we find 
$$
H(X-X') + H(X) \leq H(X+X') + H(-X-X')
$$
This gives the bound.
