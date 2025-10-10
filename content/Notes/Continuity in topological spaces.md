Let $f:X\to Y$ where $X$ and $Y$ are topological spaces. Then $f$ is continuous if the preimage of every open set in $Y$ is open in $X$.

### Lemma
Equivalently, $f$ is cts iff preimage of every closed set in $Y$ is closed in $X$. 
#### Proof
Let $V$ be closed in $Y$. Then $Y\setminus V$ is open. So $f^{-1}(Y\setminus V)$ is open. Now $X\setminus f^{-1}(Y\setminus V)$ is the set of all values $x\in X$ which are not mapped to $Y\setminus V$ i.e. they are mapped to $V$. So indeed, $f^{-1}(V)=X\setminus f^{-1}(Y\setminus V)$ which is closed.
On the other hand, suppose $f^{-1}(V)$ is closed for every closed $V$. Then for any open $U$ in $Y$, we have $X\setminus f^{-1}(Y\setminus U)$ open which is exactly $f^{-1}(U)$.
