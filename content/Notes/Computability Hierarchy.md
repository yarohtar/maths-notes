# $\Sigma_{1}$ sets
A set $X\subseteq \mathbb{B}^{k}$ is called $\Sigma_{1}$ 
if there is a [[Notes/Computable]] $Y\subseteq \mathbb{B}^{k+1}$ 
such that for all $\vec{w}\in \mathbb{B}^{k}$ we have
$$
\vec{w}\in X\iff \exists v((\vec{w},v)\in Y)
$$
### Theorem
A set is $\Sigma_{1}$ if and only if it is [[Notes/Computably Enumerable]].
#### Proof
$(\implies)$ By the previous definition, 
search for $v$ such that $(\vec{w},v)\in Y$. 
If it exists, we will find it. 
If it doesn't, the program diverges. 
$(\impliedby)$ Suppose $X$ is [[Notes/Computably Enumerable]]. 
Let $M$ be a machine that lists all members of $X$. 
Construct the set $Y$ such that $(\vec{w},v)\in Y$ 
iff $M$ lists $\vec{w}$ in step $\# v$. 
Then $Y$ is [[Notes/Computable]], so $X$ is $\Sigma_{1}$.
### Proposition
The class of $\Sigma_{1}$ sets is not closed under complementation.
#### Proof
[[Notes/The Halting Problem]]
# $\Pi_{1}$ sets
A set is called $\Pi_{1}$ if it is a complement of a $\Sigma_{1}$ set.
### Proposition
A set $X$ is $\Pi_{1}$ if and only if there is a [[Notes/Computable]] $Y\subseteq \mathbb{B}^{k+1}$ 
such that for all $\vec{w}\in \mathbb{B}^{k}$ we have
$$
\vec{w}\in X\iff \forall v(\vec{w},v) \in Y
$$
# $\Delta_{1}$ sets
A set is called $\Delta_{1}$ if it is both $\Sigma_{1}$ and $\Pi_{1}$.
### Proposition
A set is [[Notes/Computable]] if and only if it is a $\Delta_{1}$ set.
#### Proof
$(\implies)$ A set is $\Sigma_{1}$ iff it is [[Notes/Computably Enumerable]]. 
It is easy to see that for a [[Notes/Computable]] set, 
it is computably enumerable. 
It's complement is also computable, so computably enumerable. 
$(\impliedby)$ To go the other way, 
list all the elements of $X$ and $X^{C}$ in alternating order, 
because both $X$ and $X^{C}$ are computably enumerable. 
But this will list all elements of input space 
so $X$ will be [[Notes/Computable]].