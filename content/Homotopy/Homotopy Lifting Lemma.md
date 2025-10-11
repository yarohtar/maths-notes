Let $p:\tilde{X}\to X$ be a [[Homotopy/Covering Spaces\|covering map]], 
Let $H:Y\times I\to X$ be a homotopy from $f_{0}$ to $f_{1}$
Let $\tilde{f}_{0}$ be a [[Homotopy/Lift]] of $f_{0}$
Then there exists a unique homotopy $\tilde{H}:Y\times I\to \tilde{X}$ such that 
1. $\tilde{H}(\cdot,0)=\tilde{f}_{0}(\cdot)$
2. $p\circ \tilde{H}=H$
#### Proof
Let $\{ U_{\alpha} \}_{\alpha \in I}$ be an open cover of $X$ by evenly covered sets.
Say $p ^{-1}(U_{\alpha})=\sqcup_{\beta \in I_{\alpha}}V_{\beta}$, with $p|_{V_{\beta}}:V_{\beta}\to U_{\alpha}$ a homeomorphism 
$$
\bigcup_{\alpha}H^{-1}(U_{\alpha})\quad\text{ cover } \quad Y\times I
$$

Fix $y_{0}\in Y$.
By [[Analysis/Lebesgue number lemma]] applied to $\{ y_{0} \}\times I$, 
there is some $N$ st $\{ y_{0} \}\times\left[ \frac{i}{N}, \frac{i+1}{N} \right]\subseteq H^{-1}(U_{\alpha(i)})$ for some $\alpha(i)$.
Furthermore, due to compactness of $\left[ \frac{i}{N}, \frac{i+1}{N} \right]$ 
we know that there is some open $W_{y_{0}}^{(i)}$ (a nbd of $y_{0}$), 
such that $H\left( W_{y_{0}}^{(i)}\times\left[ \frac{i}{N}, \frac{i+1}{N} \right] \right)\subseteq U_{\alpha(i)}$
##### Why?
Idea is, take $H^{-1}(U_{\alpha(i)})$ open in $Y\times\left[ \frac{i}{N}, \frac{i+1}{N} \right]$, 
so it is open in product topology, 
so it is a union of $U\times V$ where $U$ is open in $Y$, 
and $V$ is open in (interval). 
Then take all the pairs that contain $(y_{0},r)$ for some number $r$. 
Those will induce an open cover on the interval, 
hence take the finite subcover, 
and intersect the corresponding open sets in $Y$
#####
Now set $W_{y_{0}}'=\bigcap W_{y_{0}}^{(i)}$. 
Finally, take $\beta \in I_{\alpha(0)}$ such that $\tilde{f}_{0}(y_{0})\in V_{\beta}$, and set $W_{y_{0}}=W_{y_{0}}'\cap \tilde{f}_{0}^{-1}(V_{\beta})$.
##### Step 1
Now $\tilde{f}_{0}(W_{y_{0}})\subseteq V_{\beta}$ and $H\left( W_{y_{0}}\times\left[0, \frac{1}{N} \right] \right)\subseteq U_{\alpha(0)}$
Then we can set:
$$
\tilde{H}|_{W_{y_{0}}\times\left[ 0, \frac{1}{N} \right]}=(p|_{V_{\beta}})^{-1}\circ H|_{W_{y_{0}}\times\left[ 0, \frac{1}{N} \right]}:W_{y_{0}}\times\left[ 0, \frac{1}{N} \right]\to V_{\beta}
$$
and note that $\tilde{H}(\cdot,0)$ agrees with $\tilde{f}_{0}$ on $W_{y_{0}}$.
##### Step 2
Proceed iteratively, now using $\tilde{H}\left(\cdot, \frac{i}{N} \right)$ instead of $\tilde{f}_{0}$ (note that our $W_{y_{0}}$ and $V_{\beta}$ stay valid throughout)
Upshot:
Get map $\tilde{H}|_{W_{y_{0}}\times I}$ lifting $H|_{W_{y_{0}}\times I}$ and extending $\tilde{f}_{0}|_{W_{y_{0}}}$

##### Check
Lifts need to agree on $(W_{y_{0}}\times I)\cap(W_{y_{1}}\times I)=(W_{y_{0}}\cap W_{y_{1}})\times I$ ?
By [[Homotopy/Uniqueness of Lifts Lemma]], they must agree on an open and closed subset of $(W_{y_{0}}\cap W_{y_{1}})\times I$.
By construction, they agree on $(W_{y_{0}}\cap W_{y_{1}})\times \{ 0 \}$
So they have to agree on all of $(W_{y_{0}}\cap W_{y_{1}})\times I$
eg by considering that they agree on $\{ y \}\times \{ 0 \}$ (for each $y\in W_{y_{0}}\cap W_{y_{1}}$) 
and $\{ y \}\times I$ are all connected.

### Corollaries
[[Homotopy/Path Lifting Lemma]]
[[Homotopy/Path Push Forward Bijection Proposition]]

[[Homotopy/Covering Fundamental groups]]
