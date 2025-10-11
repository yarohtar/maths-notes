### Definition (path)
Let $X$ be a space with $x_{0},x_{1}\in X$. A path from $x_{0}$ to $x_{1}$ is a map $\gamma:I\to X$ st $\gamma(0)=x_{0}$ and $\gamma(1)=x_{1}$.
If $x_{0}=x_{1}$ then $\gamma$ is a loop based at $x_{0}$.
#### Notation
$\gamma:x_{0}\leadsto x_{1}$ 

### Definition (concatenation)
Let $\gamma:x_{0}\leadsto x_{1}$ and $\gamma':x_{1}\leadsto x_{2}$. Then we define a new path 
$$
(\gamma \cdot \gamma')(t)=\begin{cases}
\gamma(2t) & t\leq \frac{1}{2} \\
\gamma(2t-1) & t\geq \frac{1}{2}
\end{cases}
$$
Note this is OPPOSITE to function composition.
### Definition (inverse)
$\gamma ^{-1}:x_{1}\leadsto x_{0}$ with $\gamma(t)=\gamma(1-t)$
### Definition (constant path)
$c_{x_{0}}:x_{0}\leadsto x_{0}$

### Definition (homotopic paths)
Paths $\gamma:x_{0}\leadsto x_{1}$ and $\gamma':x_{0}\leadsto x_{1}$ are homotopic as paths from $x_{0}$ to $x_{1}$ if they are homotopic as [[XNotes/Homotopy#Definition (homotopy)\|maps]] relative to $\{ 0,1 \}$

[[XNotes/Path Components]]

