[[Notes/Conjugate Gradient Search]]
## Initialize
Set $k=0$, $x^{0}=0$, $r^{0}=b$ and $d^{0}=r^{0}$
## Make the step
Calculate:
$$
\alpha_{k} = \frac{\lVert r^{k} \rVert ^{2}}{(d^{k},Ad^{k})}
$$
and 
$$
x^{k+1} = x^{k} + \alpha_{k} d^{k}
$$
## Find residual
$$
r^{k+1} = r^{k} - \alpha_{k} Ad^{k}
$$
If $\lVert r^{k+1} \rVert$ is small enough then stop.
## Find the next direction
Calculate:
$$
\beta_{k} = \frac{\lVert r^{k+1} \rVert ^{2}}{ \lVert r^{k} \rVert ^{2}}
$$
and 
$$
d^{k+1}=r^{k+1} + \beta_{k} d^{k}
$$
