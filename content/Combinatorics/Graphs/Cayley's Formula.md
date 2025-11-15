Let $R$ be a [[Algebra/Ring Theory/Ring\|Ring]] and let $x_{1},x_{2},\dots,x_{n}\in R$.
Let $K_{n}$ be the complete [[Combinatorics/Graphs/Directed Graph]] on $1,2,\dots,n$
with weights 
$$
w(ij)=x_{i}
$$
For any [[Combinatorics/Graphs/Weighted Graph]] $G=(V,E,w)$ define its weight as 
$$
w(G) = \prod_{e\in E} w(e)
$$
Consider spanning trees of $K_{n}$ with edges directed away from some root.
The sum of weights of all such trees is:
$$
p_{n}(x_{1},x_{2},\dots,x_{n}) = (x_{1}+x_{2}+\dots+x_{n})^{n-1}
$$
### Proof
Note that $p_{n}$ is a symmetric, homogeneous polynomial of degree $n-1$.
The weight of trees with leaf node $n$ is $p_{n}(x_{1},\dots,x_{n-1},0)$
Counting another way, we find 
$$
p_{n}(x_{1},\dots,x_{n-1},0) = (x_{1}+\dots+x_{n-1}) p_{n-1}(x_{1},\dots,x_{n-1})
$$
Proceed by induction. 
For $n=2$ we can check $p_{2}(x_{1},x_{2})=x_{1}+x_{2}$ (there are only 2 trees).
Now assume that 
$$
p_{n-1}(x_{1},\dots,x_{n-1})=(x_{1}+\dots+x_{n-1})^{n-2}
$$
We conclude that 
$$
p_{n}(x_{1},\dots,x_{n-1},0) = (x_{1}+\dots+x_{n-1})^{n-1}
$$
Consider $r_{n}(x_{n})=p_{n}(x_{1},\dots,x_{n})-(x_{1}+\dots+x_{n})^{n-1}$.
This is a symmetric, homogeneous polynomial of degree at most $n-1$.
Also $r_{n}(0)=0$, so $r_{n}$ is divisible by $x_{n}$.
By symmetry, it is divisible by all of $x_{1},x_{2},\dots,x_{n}$,
but this can only happen if $r_{n}=0$ so we conclude:
$$
p_{n}(x_{1},\dots,x_{n}) = (x_{1}+\dots+x_{n})^{n-1}
$$
## Corollary
Consider all undirected trees spanning $K_{n}$.
Then the following holds: 
$$
\sum_{T \text{ spans }K_{n}} \prod_{i=1}^{n} x_{i}^{d_{T}(i)-1} = (x_{1}+\dots+x_{n})^{n-2} 
$$
Equivalently, if we define undirected weights $w'(ij)=x_{i}x_{j}$,
then the sum of weights of all spanning trees of $K_{n}$ is: 
$$
\left( \prod_{i=1}^{n} x_{i} \right) ( x_{1}+\dots+x_{n})^{n-2}
$$
### Proof
Take an undirected spanning tree $T$. 
By rooting it at node $i$, obtain the directed spanning tree $T_{i}$.
Note that 
$$
\begin{gather}
w(T_{i}) = x_{i} \prod_{j=1}^{n} x_{j}^{d_{T}(j)-1}  \\
\sum_{i}w(T_{i}) = \left( \sum_{i}x_{i} \right) \prod_{j=1}^{n} x_{j}^{d_{T}(j)-1} \\
\sum_{T\text{ spans }K_{n}} \sum_{i} w(T_{i}) = \left( \sum_{i}x_{i} \right) \sum_{T\text{ spans }K_{n}} \prod_{j=1}^{n}x_{j}^{d_{T}(j)-1}  
\end{gather}
$$
Now the LHS is all the directed spanning trees so we conclude 
$$
\sum_{T\text{ spans }K_{n}} \prod_{i=1}^{n} x_{i}^{d_{T}(i)-1} = (x_{1}+\dots+x_{n})^{n-2}
$$
For the second part, note that the weight of an undirected spanning tree is: 
$$
w'(T) = \prod_{i=1}^{n} x_{i}^{d_{T}(i)}
$$
from where the result follows.
## Corollary
Fix some numbers $d_{1},d_{2},\dots,d_{n}\in \mathbb{N}$
The number of spanning trees $T$ of $K_{n}$ that satisfy $d_{T}(i)=d_{i}$ 
is the [[Combinatorics/Counting/Multinomial Coefficient]]:
$$
\binom{ n-2 }{ d_{1}-1,\, d_{2}-1,\dots,d_{n}-1 }
$$
### Proof
Follows immediately from [[Combinatorics/Counting/Multinomial Theorem]], and previous corollary.

