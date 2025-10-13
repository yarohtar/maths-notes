Define, using [[Foundations/Computability/The Software Principle]], the sets:
$$
K=\{ w: f_{w,1}(w)\downarrow \}
$$
$$
K_{0}=\{ (w,v):f_{w,1}(v)\downarrow \}
$$
### Theorem
The sets $K$ and $K_{0}$ are [[Foundations/Computability/Computably Enumerable]].
#### Proof
Just run them. If they halt, great. If not then output is $\uparrow$ which is fine.
### Theorem
The sets $K$ and $K_{0}$ are not [[Foundations/Computability/Computable]].
#### Proof
Suppose $K$ was computable. 
Let $\chi$ be the total computable indicator function for $K$.
Define the partial function:
$$
g(w) = \begin{cases}
\uparrow  & w\in K \\
0  & w\not\in K
\end{cases}
$$
Note that $g$ is computable, so find some $w$ s.t. $f_{w,1}=g$.
Now if $w\in K$ then $g(w)\downarrow$ which is a contradiction.
If $w\not\in K$ then $g(w)\uparrow$ which is a contradiction.
Thus $K$ is not computable. 
Similar works for $K_{0}$.
