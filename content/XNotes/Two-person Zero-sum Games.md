Suppose two players are playing a game where Player1 chooses index $i$ and Player2 chooses index $j$. Then Player1 gets payoff $A_{ij}$ while Player2 gets payoff $-A_{ij}$.
We want to find a distribution of choices $p$ for Player1 which gives:
$$\min_j((A^Tp)_j)$$
the largest possible (where $(A^Tp)_j$ is the expected payoff for Player1 given that Player2 plays $j$).

Introduce $e=(1 \quad \dots \quad1)^T$ and reframe this into a [[XNotes/Linear programs\|linear program]]:
maximise $v$ s.t. $A^Tp\geq ve$, $p\geq 0$, $e^Tp=1$.

[[XNotes/Lagrange multipliers\|Lagrangian]] is 
$$\begin{align*}L(v,p,z, q,w)&=v-q^T(ve+z-A^Tp)-w(e^Tp-1)\\&=w+p^T(Aq-we)-z^Tq+v(1-q^Te)
\end{align*}$$
Now $z\geq 0$ so $q\geq 0$ and $p\geq 0$ so $Aq-we\leq 0$. Also $v\in\mathbb R$, so $q^Te=1$ i.e. $q$ is a distribution. 
Now the dual problem is:
minimize $w$ s.t. $Aq\leq we$, $q\geq 0$ and $q^Te=1$.
Note that this is exactly the problem of finding the optimal strategy for Player2.

Suppose we have optimal strategies $p$ and $q$.
Complementary slackness for $p$ gives:
$$q^TA^Tp-we^Tp=0,\quad\text{i.e.}\quad q^TA^Tp=w$$
Also in an optimal strategy $w=v$ (by [[Numerical/Duality (Optimisation)#Strong duality\|strong duality]]). Hence, using [[XNotes/Optimality conditions in LPs\|optimality conditions]] we arrive at the following theorem:
## Theorem
Suppose $p$ and $q$ are strategies for Player1 and Player2 respectively, and $v$ is a value satisfying:
- $A^Tp\geq ve$
- $Aq\leq ve$
- $v=q^TA^Tp$
Then these are all optimal, and $v$ is the value of the problem.

## Sidenote
If strategies $p=e_i$ and $q=e_j$ are optimal (where $e_i$ and $e_j$ are standard basis vectors), then $A_{ij}$ is called the saddle point of the matrix.