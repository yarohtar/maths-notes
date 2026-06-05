See [[Numerical/Lagrange multipliers]]
Suppose we are minimizing 
$$
F[x]=\int f(t,x,\dot x) dt
$$
subject to $G[x]=\int g(t,x,\dot x) dt =C$. 
This is equivalent to minimizing:

$$L[x,\lambda]=\int (f(t,x,\dot x)-\lambda g(t,x,\dot x))dt+\lambda C$$
Note that here $\lambda$ does not depend on $t$ because we are only taking $F[x]-\lambda (G[x]-C)$. 
On the other hand, suppose the condition was $g(t,x,\dot x)=0$. 
Then we want to minimize:

$$L[x,\lambda]=\int (f(t,x,\dot x)-\lambda(t) g(t,x,\dot x))dt$$
This way, the [[Calculus/Euler-Lagrange]] for the function $\lambda(t)$ will give condition $g(t,x,\dot x)=0$. 