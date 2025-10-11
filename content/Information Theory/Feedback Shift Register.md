A general feedback shift register is a map $f:\mathbb{F}_{2}^{d}\to \mathbb{F}_{2}^{d}$
given by:
$$
f(x_{0},\dots,x_{d-1})=(x_{1},\dots,x_{d-1},C(x_{0},\dots,x_{d-1}))
$$
where $C:\mathbb{F}_{2}^{d}\to \mathbb{F}_{2}$. 

The stream associated to the initial fill $y_{0},\dots y_{d-1}$ is
the sequence $y_{0},y_{1},\dots$ where:
$$
y_{n}=C(y_{n-d},\dots,y_{n-1})
$$
for $n\geq d$
