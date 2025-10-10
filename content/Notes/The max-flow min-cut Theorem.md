In the [[Notes/The Maximal Flow Problem\|maximal flow problem]], let $N$ be the set of nodes. For any $S,T\subset N$ define the flow from $S$ to $T$:
$$f(S,T)=\sum_{i\in S,\ j\in T}x_{ij}$$
and the cut of $S$:
$$c(S)=\sum_{i\in S,\ j\in\overline S}c_{ij}$$
where $\overline S=N\setminus S$.
We claim the maximum flow is exactly $\min_S c(S)$.
Suppose we have a maximum flow, and pick some $S$ where $1\in S$, but $n\not\in S$. We know:
$$v=\sum_{j\in N}x_{1,j}-x_{j,1}$$
$$0=\sum_{j\in N}x_{s,j}-x_{j,s}$$
for any $s\in S$, $s\neq 1$.
Summing these equations over $S$:
$$\begin{align*}
v&=\sum_{i\in S,\ j\in N}x_{i,j}-\sum_{i\in S,\ j\in N}x_{j,i}\\
&=f(S,N)-f(N,S)\\
&=(f(S,S)+f(S,\overline S))-(f(S,S)+f(\overline S,S))\\
&=f(S,\overline S)-f(\overline S,S)\\
&\leq f(S,\overline S)\\
&\leq c(S)
\end{align*}$$
So any flow is smaller than any cut. Equality holds for $x_{ji}=0$ and $x_{ij}=c_{ij}$ for all $i\in S$ and $j\in\overline S$.
Now construct $S$ inductively:
- Let $1$ be in $S$
- If $i\in S$ and $x_{ij}<c_{ij}$ then $j\in S$
- If $i\in S$ and $x_{ji}>0$ then $j\in S$
If $S$ contains $n$, we found an augmented path along which we can increase flow. Hence this wasn't optimal. Otherwise, we have to have $x_{ij}=c_{ij}$ and $x_{ji}=0$ for all $i\in S$, $j\in\overline S$. But this is exactly the equality condition from before.
Hence, max-flow is equal to min-cut.
By similar construction/argument, having no augmented paths where we can increase flow means that $S$ will not contain $n$ and hence the flow is exactly $c(S)$, but then this is surely maximal.