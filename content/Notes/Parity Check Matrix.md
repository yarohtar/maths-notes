Let $C$ be a $(n,k)$ [[Notes/Linear Code]]
A parity check matrix $H$ is a [[Notes/Generator Matrix]] for $C^{\bot}$
It is a $(n-k)\times n$ matrix 
Note that $C=\{ x\in \mathbb{F}_{2}^{n} : Hx=0 \}$

### Lemma
An $(n,k)$ [[Notes/Linear Code]] with [[Notes/Generator Matrix]] $G=(I_{k}|B)$ 
has parity check matrix $H=(-B^{T}|I_{n-k})$
### Proof
Since $GH^{T}=(I_{k}|B)\begin{pmatrix}-B\\I_{n-k}\end{pmatrix}=-B+B=0$
So rows of $H$ generate a subcode of $C^{\bot}$
But $dim(C^{\bot})=n-k=rank(H)$
Thus the rows of $H$ are a basis for $C^{\bot}$ as required.
### Lemma
Let $C$ be a [[Notes/Linear Code]] with parity check matrix $H$.
Then $d(C)=d$ if and only if:
1. any $d-1$ columns of $H$ are linearly independent
2. a set of $d$ columns of $H$ are linearly dependent.
#### Proof
Suppose $C$ has length $n$
Then $C=\{ x:Hx=0 \}$
If $H$ has columns $v_{1},\dots ,v_{m}$ 
Then $(x_{1},\dots ,x_{m})\in C$ if and only if $\sum x_{i} v_{i}=0$
