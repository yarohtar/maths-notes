We equip a set $M$ with metric $d:M\times M\to \mathbb R_{\geq 0}$ which satisfies:
- $d(x,y)=0\iff x=y$ 
- $d(x,y)=d(y,x)$
- $d(x,y)\leq d(x,z)+d(z,y)$
Then $(M,d)$ is called a metric space.

We have the usual definitions of convergence of sequences and their usual properties .........

On $(M,d)$ for $x\in M$ and $r<0$ we define the open ball $D_r(x)=\{y\in M: d(x,y)<r\}$ 
and closed ball $B_r(x)=\{y\in M: d(x,y)\leq r\}$

A set $A$ is open iff every point in $A$ has an open ball contained in $A$. 
This is the metric induced [[Topology/Topological Space\|topology]].
A set $B$ is closed iff $M\setminus B$ is open.

Let $B\subseteq M$ closed. 
Suppose $x_n$ is a convergent sequence in $M$ s.t. $x_n\to x$ and $x_n\in B$. 
Suppose $x\not\in B$. 
Then any open ball around $x$ will contain some point in $B$. 
But then no open ball around $x$ is in $M\setminus B$, 
so $M\setminus B$ is not open, 
so $B$ is not closed - contradiction. 
Similarly, if all convergent sequences in $M$ that are in $B$ are also convergent in $B$,
then $B$ is closed. 

[[Analysis/Complete]]

A subset $A\subseteq M$ is bounded if there are some $r>0$ and $z\in M$ s.t. $A\subset B_r(z)$.
[[Analysis/Totally bounded]]

### Some properties 
- Convergent$\implies$Cauchy$\implies$Bounded (but none of the other directions hold)
- If $N$ is a complete subspace of $M$ then $N$ is closed in $M$
- If $N$ is a closed subspace of a complete space $M$ then $N$ is also complete.

[[Analysis/Continuous function spaces]]
[[Analysis/Contraction mapping]]
[[Analysis/Picard-Lindelof Theorem]]
[[Analysis/Compact - Sequentially Compact - Totally Bounded]]
