Let $\mathbb{F}$ be a [[Algebra/Field]].
Let $S_{1},S_{2},\dots,S_{n}\subseteq \mathbb{F}$ be nonempty and define 
$$
g_{i}(x) = \prod_{s \in S_{i}}(x-s)
$$
Let $f\in \mathbb{F}[x_{1},x_{2},\dots,x_{n}]$ be a polynomial satisfying 
$$
f(s) = 0
$$
for all $s \in S_{1}\times S_{2}\times\dots \times S_{n}$.
Then there are some $h_{1},h_{2},\dots h_{n}\in \mathbb{F}[x_{1},\dots,x_{n}]$ satisfying 
$$
f(x_{1},\dots,x_{n})=\sum_{i=1}^{n} h_{i}(x_{1},\dots,x_{n}) g_{i}(x_{i})
$$
with total degrees 
$$
\deg h_{i} \leq \deg f - \deg g_{i}
$$
### Proof
Reduce $f\pmod{g_{i}}$ for each $i$ so that we get remainder $\bar{f}$, 
as well coefficients $h_{1},h_{2},\dots,h_{n}$ such that 
$$
f=\bar{f}+\sum_{i=1}^{n} h_{i} g_{i}
$$
with degrees $\deg h_{i}\leq\deg f-\deg g_{i}$.
Note that for every $i$ 
$$
\deg_{x_{i}} \bar{f} < \lvert S_{i} \rvert 
$$
Also $g_{i}(s_{i})$ all vanish for each $s \in S_{1}\times\dots \times S_{n}$ so $\bar{f}(s)=0$.
We can prove by induction that then $\bar{f}=0$.

