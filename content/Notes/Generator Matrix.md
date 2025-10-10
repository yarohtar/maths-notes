Let $C$ be a $(n,k)$ [[Notes/Linear Code]].
A generator matrix for $C$ is a $k\times n$ matrix whose rows are a basis for $C$ 

### Lemma
Every $(n,k)$ linear code is equivalent to a linear code with [[Notes/Generator Matrix]] of form $(I_{k}|B)$
#### Proof
We can perform row operations:
- swap 2 rows
- add one row to another
(because rows are just basis vectors, this corresponds to permuting the basis or taking linear combinations of basis vectors to find new bases)
By Gaussian elimination and some permutations we get $G$, the generator matrix in row form:
$$
G=\begin{pmatrix}
1 & * & * & \dots & * \\
0 & 1 & * & \dots & * \\
0 & 0 & 1 & \dots & *  \\
\vdots & \vdots & \vdots & \vdots & \vdots
\end{pmatrix}
$$
Then with more row operations we can finish and get $G=(I_{k}|B)$
with $B$ a $k\times(n-k)$ matrix