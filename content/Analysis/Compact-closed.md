Let $Y\subset X$. Then:
1. If $X$ is compact and $Y$ is closed in $X$, then $Y$ is compact
2. If $X$ is [[Analysis/Hausdorff space]] and $Y$ is compact, then $Y$ is closed
#### Proof sketch
1. Let $\mathcal U$ be an open cover of $Y$. For each $V\in\mathcal U$, find $V'$ open in $X$ s.t. $V=V'\cap Y$, and name this collection $\mathcal U'$. Then $\mathcal U'\cup \{X\setminus Y\}$ is an open cover of $X$. Find a finite subcover of $X$. Intersect with $Y$ to get back a finite subcover of $Y$.
2. We show $X\setminus Y$ is open. Let $x\in X$. For any $y\in Y$ find open $U_y$ and $V_y$ disjoint s.t. $x\in U_y$ and $y\in V_y$ (because $X$ is Hausdorff). Now, certainly $\{Y\cap V_y\}$ makes an open cover of $Y$, so find a finite subcover and let $F$ be the finite set of $y$s s.t. $\{Y\cap V_y:y\in F\}$ makes this finite subcover. Then take $U=\bigcap_{y\in F}U_y$. This is an open nbd of $x$ disjoint from $Y$. 