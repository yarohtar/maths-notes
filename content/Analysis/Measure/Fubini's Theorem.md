Let $(E_{1},\mathcal{E}_{1},\mu_{1})$ and $(E_{2},\mathcal{E}_{2},\mu_{2})$ be [[Analysis/Measure/Measure Space]]s
Let $E=E_{1}\times E_{2}$ with the [[Analysis/Measure/Product measure]] $\mu$ 
and [[Analysis/Measure/Product sigma algebra]] $\mathcal{E}$
### First 
Let $f$ be a non-negative $\mathcal{E}$-[[Analysis/Measure/Measurable Function]]. 
Then the [[Analysis/Measure/Integral]] satisfies:
$$
\mu(f)=\int_{E_{1}}\left( \int_{E_{2}} f(x_{1},x_{2})\mu_{2}(dx_{2}) \right)\mu_{1}(dx_{1})
$$
### Second
Let $f$ be a $\mu$-integrable function. 
Define:
$$
A_{1}=\left\{  x_{1}\in E_{1}:\int_{E_{2}}\lvert f(x_{1},x_{2}) \rvert \mu_{2}(dx_{2}) <\infty \right\}
$$
and define $f_{1}:E_{1}\to \mathbb{R}$ by:
$$
f_{1}(x_{1})=\int_{E_{2}}f(x_{1},x_{2})\mu_{2}(dx_{2})
$$
for $x_{1}\in A_{1}$ and $f_{1}(x_{1})=0$ otherwise.
Then $\mu_{1}(E_{1}\setminus A_{1})=0$ and $f_{1}$ is $\mu_{1}$ [[Analysis/Measure/Integral\|integrable]] with $\mu_{1}(f_{1})=\mu(f)$.