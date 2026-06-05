For [[Foundations/Ordinals/Well-ordered]] sets $X,Y$, 
write $X\leq Y$ if $X$ is [[Foundations/Ordinals/Order-isomorphic]] to an [[Foundations/Ordinals/Initial Segment]] of $Y$ 
### Theorem
Let $X,Y$ be [[Foundations/Ordinals/Well-ordered]] sets. 
Then either $X\leq Y$ or $Y\leq X$.

#### Proof
Assume $Y\not\leq X$. Particular $Y\neq \emptyset$
So we can fix $y_{0}\in Y$
Define $f:X\to Y$ by [[Foundations/Set Theory/Definition by recursion]]:
$$
f(x)=\begin{cases}
min(Y\setminus \{ f(y):y<x \})  & \text{if }Y\setminus \{ f(y):y<x \}\neq \emptyset \\
y_{0} & \text{otherwise}
\end{cases}
$$
Assume the 'otherwise' clause arises. Then there is a least $x$ where it arises. So $f(I_{x})=\{ f(y):y<x \}=Y$
And for all $y<x$
$$
f(y)=\min(Y\setminus \{ f(z):z<y \})
$$
As in (previous prop) we show that $f|_{I_{x}}$ is order preserving. 
So $Y$ is [[Foundations/Ordinals/Order-isomorphic]] to an [[Foundations/Ordinals/Initial Segment]] of $X$ 

As in (previous prop) we show $f$ is order-preserving and $\operatorname{Im}(f)$ is an initial segment of $Y$
Hence $X\leq Y$.

### Proposition
Let $X$, $Y$ be [[Foundations/Ordinals/Well-ordered]] sets. 
If $X\leq Y$ and $Y\leq X$ then $X$ is [[Foundations/Ordinals/Order-isomorphic]] to $Y$ 
#### Proof
Let $f:X\to Y$ and $g:Y\to X$ be [[Foundations/Ordinals/Order-isomorphic]] to initial segments of $Y$ and $X$ respectively
Then $g\circ f:X\to X$ is an order isomorphism to an [[Foundations/Ordinals/Initial Segment]] of $X$. 
By [[Foundations/Set Theory/Subset Collapse]] and (prop 3?) $g\circ f=Id_{X}$. 
Similarly $f\circ g=Id_{Y}$



## Constructing new well ordered sets
$X^{+}=X\cup \{ z \}$ for some $z\not\in X$ and extend the ordering...
[[Foundations/Ordinals/Extends]]
[[Foundations/Ordinals/Nested]]
### Proposition
Let $\{ X_{i}:i\in I \}$ be a [[Foundations/Ordinals/Nested]] set of [[Foundations/Ordinals/Well-ordered]] sets. Then there is a well ordered set $X$ such that $X_{i}\leq X$ for all $i\in I$.
#### Proof
Let $X=\bigcup_{i\in I}X_{i}$
For $x,y\in X$ we let $x<y$ iff there is some $i\in I$ such that $x,y\in X_{i}$ and $x<_{i}y$.
Since the $X_{i}$ are [[Foundations/Ordinals/Nested]], 
it follows that $<$ on $X$ is a well defined [[Foundations/Ordinals/Linear order]] 
such that each $X_{i}$ is an [[Foundations/Ordinals/Initial Segment]] of $X$ 
Let $S\subseteq X$, $S\neq \emptyset$. 
Then there is some $i\in I$ such that $X_{i}\cap S\neq \emptyset$
Since $X_{i}$ is [[Foundations/Ordinals/Well-ordered]], 
then $X_{i}\cap S$ has a least element $x$. 
Since $X_{i}$ is initial segment of $X$,
$x$ has to be the least element of $S$. 