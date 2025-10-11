Let $Y$ be a [[XNotes/Well-ordered]] set and $X\subseteq Y$
Then there is a unique [[XNotes/Initial Segment]] of $Y$ which is [[XNotes/Order-isomorphic]] to $X$ 

#### Proof
##### Uniqueness 
Assume $f$ is an order isomorphism from $X$ to an initial segment of $Y$ 
By lemma ? 
$$
f(x)=min(Y\setminus \{ f(y):y<x \})
$$
for all $x\in X$
By [[XNotes/Proof by Induction]], $f$ is uniquely determined 
##### Existence
WLOG $Y\neq \emptyset$
Fix $y_{0}\in Y$
Define $f:X\to Y$ by recursion
$$
f(x)=\begin{cases}
min(Y\setminus \{ f(y):y<x \}) & \text{if }Y\setminus \{ f(y):y<x \}\neq \emptyset \\
y_{0} & \text{otherwise}
\end{cases}
$$
We first prove that the 'otherwise' clause does not arise
We do this by proving that $f(x)\leq x$ for all $x\in X$
(by induction)
Fix $x\in X$ and assume $f(y)\leq y$ for all $y<x$
Then $x\in Y\setminus \{ f(y):y<x \}$ and hence $f(x)\leq x$

Fix $y<x$ in $X$ 
$f(x)\in Y\setminus \{ f(z):z<x \}\subseteq Y\setminus \{ f(z):z<y \}$
Hence $f(y)\leq f(x)$ and so $f(y)<f(x)$ so $f$ is order preserving 

Let $a\in Y\setminus im(f)$
We show that $f(x)<a$ for all $x\in X$
It will then follow that $im(f)$ is an [[XNotes/Initial Segment]] of $Y$ and we are done.
[[XNotes/Proof by Induction]]
Fix $x\in X$ and assume $f(y)<a$ for all $y<x$
$$
a\in Y\setminus \{ f(y):y<x \}
$$
so $f(x)\leq a$ and thus $f(x)<a$