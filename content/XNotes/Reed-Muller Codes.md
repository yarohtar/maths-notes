Let $X=\mathbb{F}_{2}^{d}=\{ p_{1},\dots,p_{n} \}$ where $n=2^{d}$
For each $A\subseteq X$  we get a vector $\mathbb{1}_{A}\in \mathbb{F}_{2}^{n}$ by the rule:
$(\mathbb{1}_{A})_{i}=1$ iff $p_{i}\in A$ (i.e. its an indicator of $A$)

For $A,B\subseteq X$ we have:
$$
\begin{gather}
\mathbb{1}_{A}+\mathbb{1}_{B}=\mathbb{1}_{A}\triangle\mathbb{1}_{B}\\
\mathbb{1}_{A}\land \mathbb{1}_{B}=\mathbb{1}_{A}\cap \mathbb{1}_{B}\\
w(\mathbb{1}_{A})=\lvert A \rvert 
\end{gather}
$$
Let $v_{0}=\mathbb{1}_{A}(1,1,\dots 1)$
For $1\leq i\leq d$ let $v_{i}=\mathbb{1}_{H_{i}}$ where $H_{i}=\{ p \in X: p_{i}=0 \}$

### Definition
Reed-Muller code $RM(d,r)$ of order $r$ and length $n=2^{d}$ 
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
$RM(3,1)$ is spanned by $v_{0},v_{1},v_{2},v_{3}$. Deleting the first component of each codeword gives [[XNotes/Hamming's Original Code]]
$RM(3,2)$ is spanned by all the previous plus $v_{1}\land v_{2}$, etc.
$RM(3,3)=\mathbb{F}_{2}^{8}$
 
### Theorem
1. The vector $v_{i_{1}}\wedge\dots \wedge v_{i_{s}}$ for $1\leq i_{1}<\dots<i_{s}\leq d$ and $0\leq s\leq d$ are a basis for $\mathbb{F}_{2}^{n}$
2. $RM(d,r)$ has rank $\sum_{s=0}^{r}{d \choose s}$
3. $RM(d,r)=RM(d-1,r)\mid RM(d-1,r-1)$ [[XNotes/The Bar Product]]
4. $RM(d,r)$ has weight $2^{d-r}$
#### Proof
1. We have a set of $\sum_{s=0}^{d}{d \choose s}=(1+1)^{d}=2^{d}$ vectors
   So it suffices to show they span $\mathbb{F}_{2}^{n}$, equivalently $RM(d,d)=\mathbb{F}_{2}^{n}$
   Let $p \in X$
   Let
   $$
   y_{i}=\begin{cases}
v_{i} & \text{if } p_{i}=0\\
v_{i}+v_{0} & \text{otherwise}
\end{cases}
   $$
   Expanding using distributive law, gives that $\mathbb{1}_{\{ p \}}\in RM(d,d)$
   But these clearly span $\mathbb{F}_{2}^{n}$
2. Follows from 1. 
3. We order $X=\mathbb{F}_{2}^{d}$ s.t. $v_{d}=(0\dots 0,1\dots 1)$ (where we take $2^{d-1}$ ones and $2^{d-1}$ zeros)
   and $v_{i}=(v_{i}'\mid v_{i}')$ for $1\leq i\leq d-1$
   Let $z\in R(d,r)$. It is a sum of wedge products of $v_{0},\dots,v_{d}$
   so $z=x+(y\wedge v_{d})$
   Where $x$ and $y$ are sums of wedge products of ...
   We have $x=(x'\mid x')$ and $y=(y'\mid y')$
   So $z=\dots=(x'\mid x'+y')\in RM(d-1,r)\mid RM(d-1,r-1)$
4. $RM(d,0)$ is the repetition code of length $2^{d}$, has weight $2^{d-0}$
   $RM(d,d)=\mathbb{F}_{2}^{n}$ by 1. has weight $1=2^{d-d}$ 
   If $0<r<d$ we use 3. and induction on $d$ 