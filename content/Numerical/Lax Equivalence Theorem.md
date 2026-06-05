Suppose we have a numerical method 
$$
u^{n+1}=A_{h}u^{n}
$$
where $h$ is the spatial step, while superscripts denote time steps.
Then this converges in norm $\lVert \cdot \rVert$ 
if and only if it is:
1. [[Numerical/Consistency of Numerical Methods\|Consistent]]
2. [[Numerical/Stability of Numerical Methods\|Stable]]
#### Proof ($\implies$)
Fix a norm $\lVert  \rVert$ (any norm) and $\lVert A_{h} \rVert=\sup \frac{\lVert  A_{h}x\rVert}{\lVert x \rVert}$ 
Then since:
$$
\lVert u^n \rVert \leq \lVert A_{h}^n u^0 \rVert \leq \lVert A_{h} \rVert ^n\lVert u^0 \rVert
$$
we get that the method is [[Numerical/Stability of Numerical Methods\|stable]] 
if and only if
$$
\lVert A_{h} \rVert \leq 1 \text{ as } h\to 0
$$
Suppose the method is also [[Numerical/Consistency of Numerical Methods\|consistent]]. 
Then, assuming $\lVert e^{0} \rVert=0$, we have
$$
\lVert e^{n} \rVert\leq \lVert \eta^{n-1} \rVert+\dots+\lVert \eta^{0} \rVert\leq nck^{2}
$$
for some constant $c>0$ 
and local truncation errors $\eta^{t}=\hat{u}^{t+1}-A_{h}\hat{u}^{t}$
Since $n\leq \frac{T}{k}$, we get $\lVert e^{n} \rVert\leq cTk$, which shows convergence. 
