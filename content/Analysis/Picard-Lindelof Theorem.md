Let $a<b$ and $R>0$. 
Suppose $y_0\in\mathbb R^n$. 
Let $\phi:[a,b]\times B_R(y_0)\to\mathbb R^n$ be continuous 
and for some $K>0$ we have $\forall x,y\in B_R(y_0), \forall t\in[a,b]$
$$||\phi (t,x)-\phi(t,y)||\leq K||x-y||$$
There there is a $\epsilon>0$ s.t. $\forall t_0\in[a,b]$:
$$f'(t)=\phi(t,f(t)),\quad\quad f(t_0)=y_0$$
has a unique solution in $[t_0-\epsilon,t_0+\epsilon]\cap [a,b]$.
## Proof
Firstly, $\phi$ is cts on a closed set hence bounded, $|\phi|<M$. 
Pick $\epsilon=\min\{\frac 1{2K},\frac R M\}$.
Let $[c,d]=[t_0-\epsilon,t_0+\epsilon]\cap [a,b]$. 
The metric space $M=C([c,d],B_R(y_0))$ (of [[Analysis/Continuous function spaces\|continuous functions]]) 
is complete in uniform metric. 
Hence define $T:M\to M$
$$(T g)(t)=y_0+\int_{t_0}^t\phi(x,g(x))dx$$
Note that $(Tg)$ is indeed cts whenever $g$ is cts (by FTA). 
We do need to check that $(Tg)(t)\in B_R(y_0)$:
$$\left|\int_{t_0}^t\phi(x,g(x))dx\right|\leq \int_{t_0}^t|\phi(x,g(x))|dx\leq \epsilon M\leq R$$
Now we check that $T$ is a contraction mapping on $M$.
$$\begin{align}d(Tg, Th)&=\sup_{t\in[c,d]}\left|\int_{t_0}^t(\phi(x,g(x))-\phi(x,h(x)))dx\right|\\
&\leq \sup_t\int_{t_0}^t|\phi(x,g(x))-\phi(x,h(x))|dx\\
&\leq \epsilon \sup_x|\phi(x,g(x))-\phi(x,h(x))|\\
&\leq \epsilon K|g(x)-h(x)|\\
&\leq |g(x)-h(x)|/2
\end{align}$$
Hence, we are done by [[Analysis/Contraction mapping\|contraction mapping theorem]] and FTA 
(i.e. $(Tg)=g\iff g$ is the solution to original problem).