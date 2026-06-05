Let $n=2^{d}$; $X=\mathbb{F}_{2}^{d}$; and $f:X\to [n]$ bijective.
View $\mathbb{F}_{2}^{n}$ as the [[Information Theory/Indicator Ring]] over $[n]$ (with operations $+$ and $\wedge$)
and furthermore define $v_{i}=1_{f(H_{i})}$ for:
$$
H_{i} = \{ p \in X : p_{i} = 0 \}
$$
with $v_{0}=1_{[n]}$.
Reed-Muller [[Information Theory/Linear Code]] $RM(d,r)$ of order $r$ and length $n=2^{d}$ 
is the vector subspace of $\mathbb{F}_{2}^{n}$ spanned by $v_{0}$ and wedge products of at most $r$ of the $v_{i}$.
### Example
$d=3$, $n=8$

|               $X$               | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| :-----------------------------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|             $v_{0}$             |  1  |  1  |  1  |  1  |  1  |  1  |  1  |  1  |
|             $v_{1}$             |  1  |  1  |  1  |  1  |  0  |  0  |  0  |  0  |
|             $v_{2}$             |  1  |  1  |  0  |  0  |  1  |  1  |  0  |  0  |
|             $v_{3}$             |  1  |  0  |  1  |  0  |  1  |  0  |  1  |  0  |
|       $v_{1}\wedge v_{2}$       |  1  |  1  |  0  |  0  |  0  |  0  |  0  |  0  |
|       $v_{2}\wedge v_{3}$       |  1  |  0  |  0  |  0  |  1  |  0  |  0  |  0  |
|       $v_{3}\wedge v_{1}$       |  1  |  0  |  1  |  0  |  0  |  0  |  0  |  0  |
| $v_{1}\wedge v_{2}\wedge v_{3}$ |  1  |  0  |  0  |  0  |  0  |  0  |  0  |  0  |

$RM(3,0)$ is spanned by $v_{0}$. It is the repetition code of length 8

$RM(3,1)$ is spanned by $v_{0},v_{1},v_{2},v_{3}$. 
Deleting the first component of each codeword gives [[Information Theory/Hamming's Original Code]]

$RM(3,2)$ is spanned by all the previous plus $v_{1}\land v_{2}$, $v_{1}\wedge v_{3}$ and $v_{2}\wedge v_{3}$.

$RM(3,3)=\mathbb{F}_{2}^{8}$
### Lemma
The vector $v_{i_{1}}\wedge\dots \wedge v_{i_{s}}$ for $1\leq i_{1}<\dots<i_{s}\leq d$ and $0\leq s\leq d$ are a basis for $\mathbb{F}_{2}^{n}$
#### Proof
We have a set of $\sum_{s=0}^{d}{d \choose s}=(1+1)^{d}=2^{d}$ vectors
So it suffices to show they span $\mathbb{F}_{2}^{n}$, equivalently $RM(d,d)=\mathbb{F}_{2}^{n}$
Let $p \in X$
Let
$$
y_{i}=\begin{cases}
v_{i} & \text{if } p_{i}=0\\
v_{i}+v_{0} & \text{otherwise}
\end{cases}
$$
and 
$$
y=y_{1}\wedge y_{2}\wedge\dots \wedge y_{d}
$$
Expanding using distributive law, gives that $1_{\{ f(p) \}}\in RM(d,d)$
But these clearly span $\mathbb{F}_{2}^{n}$.
### Corollary
$RM(d,r)$ has rank $\sum_{s=0}^{r}{d \choose s}$
### Lemma
$RM(d,r)=RM(d-1,r)\mid RM(d-1,r-1)$ [[Information Theory/The Bar Product]]
#### Proof
We order $X=\mathbb{F}_{2}^{d}$ such that $v_{d}=(0\dots 0,1\dots 1)$ 
(where we take $2^{d-1}$ ones and $2^{d-1}$ zeros)
and $v_{i}=(v_{i}'\mid v_{i}')$ for $1\leq i\leq d-1$.
Let $z\in R(d,r)$. 
It is a sum of wedge products of $v_{0},\dots,v_{d}$
so $z=x+(y\wedge v_{d})$
Where $x$ and $y$ are sums of wedge products of ...
We have $x=(x'\mid x')$ and $y=(y'\mid y')$
So $z=\dots=(x'\mid x'+y')\in RM(d-1,r)\mid RM(d-1,r-1)$
### Corollary
$RM(d,r)$ has weight $2^{d-r}$.
#### Proof
$RM(d,0)$ is the repetition code of length $2^{d}$, has weight $2^{d-0}$
$RM(d,d)=\mathbb{F}_{2}^{n}$ has weight $1=2^{d-d}$
If $0<r<d$ we use induction on $d$ with [[Information Theory/The Bar Product]]

