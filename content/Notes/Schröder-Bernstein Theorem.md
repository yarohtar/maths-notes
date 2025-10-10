Let $A$, $B$ be sets. Assume that there are injections $f:A\to B$ and $g:B\to A$. Then there's a bijection $h:A\to B$

#### Proof
We seek partitions $P\cup Q$ of $A$ and $R\cup S$ of $B$ 
s.t. $f(P)=R$ and $g(S)=Q$
Then
$$
h(x)=\begin{cases}
f(x) & x\in P \\
g^{-1}(x) & x\in Q
\end{cases}
$$
defines a bijection $A\to B$

For such partitions $A\setminus g(B\setminus f(P))=P$
Let's define $H:\mathbb{P}A\to \mathbb{P}A$ by $H(P)=A\setminus g(B\setminus f(P))$
$\mathbb{P}A$ is a [[Notes/Complete Poset]] and $H$ is order-preserving. 
By [[Notes/Knaster-Tarski fixed point theorem]] 
there exists $P\subseteq A$ such that $H(P)=P$.
Then setting $Q=A\setminus P$ and $R=f(P)$ and $S=B\setminus R$ 
gives the required partition.
