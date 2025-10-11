
Consider 
$$
F(x)=\int_{0}^Tf(t)e^{-xt}dt
$$
Suppose 
$$
f(t)\sim t^\alpha \sum_{n=0}^{\infty}a_{n}t^{n\beta} \quad %quad
\text{ as } \quad %quad
t\to 0^{+}
$$
with $\alpha>-1$ and $\beta>0$
Suppose also either: 
- $\lvert f(t) \rvert<Ke^{bt}$ for all $t>0$ and some $K,b>0$
OR
- $\int _0^T\lvert f(t) \rvert dt<\infty$
Then we have the [[Asymptotic Methods/Asymptotic Approximation]]
$$
F(x)\sim \sum_{n=0}^{\infty} a_{n} \frac{\Gamma(\alpha+\beta n+1)}{x^{\alpha+\beta n+1}}
$$

# Proof / Method
No elegance, just suffering
## Split the problem
$$
\begin{align}
F(x) & =\int_{0}^\epsilon fe^{-xt}dt+\int_{\epsilon}^Tfe^{-xt}dt \\
 & =F_{1}+F_{2}
\end{align}
$$
We expect $F_{1}$ to be the main contribution, and $F_{2}$ small.
## $F_{2}$ is small
### Case 1
$\lvert F_{2} \rvert\leq \int_{\epsilon}^TKe^{bt-xt}\leq \int_{\epsilon}^\infty Ke^{bt-xt}$
Assuming $x>b$ we can integrate this and get
$\lvert F_{2} \rvert\leq \frac{K}{x-b}e^{(b-x)\epsilon}$ ie $\lvert F_{2} \rvert=O\left( \frac{e^{-\epsilon x}}{x} \right)$#
### Case 2
$\lvert F_{2} \rvert\leq \int_{\epsilon}^T\lvert f \rvert e^{-xt}dt\leq e^{-\epsilon x}\int_{\epsilon}^T\lvert f \rvert dt$
So $\lvert F_{2} \rvert=O(e^{-\epsilon x})$

In both cases, $F_{2}$ is small beyond all orders.

## $F_{1}$ contribution
Want to show
$$
\frac{F_{1}-\sum a_{n} \frac{\Gamma(\alpha+\beta n+1)}{x^{\alpha+\beta n+1}}}{x^{-\alpha-\beta n-1}}\to 0
$$
Using a property of [[XNotes/The Gamma Function]] we find that the numerator is equal to:
$$
\begin{gather}
\left\lvert  \int_{0}^tfe^{-xt}dt-\int_{0}^\infty \sum^Na_{n}t^{\alpha+\beta n}e^{-xt}  \right\rvert =\\
=\left\lvert  \int_{0}^te^{-xt}\left[ f-\sum a_{n}t^{\alpha+\beta n} \right]dt-\int_{t}^\infty \sum a_{n}t^{\alpha+\beta n}e^{-xt}dt  \right\rvert \leq\\
\leq \int_{0}^te^{-xt}\left\lvert  f-\sum a_{n}t^{\alpha+\beta n}  \right\rvert +\left\lvert  \int_{\epsilon}^\infty \sum a_{n}t^{\alpha+\beta n}e^{-xt}dt  \right\rvert =\\=R_{1}+R_{2}


\end{gather}
$$
Now estimate
$$
\begin{align}

R_{2} & =e^{-\epsilon x}\left\lvert  \int_{t}^\infty e^{-x(t-\epsilon)}\sum a_{n}t^{\alpha+\beta n}dt  \right\rvert  \\
 & = \frac{e^{-\epsilon x}}{x}\left\lvert  \int_{0}^{\infty}e^{-u}\sum a_{n}\left( \epsilon+\frac{u}{x} \right)^{\alpha+\beta n}du  \right\rvert 
\end{align}
$$
as $x\to \infty$.
Let $x>1$ and introduce $M\in \mathbb{Z}^+$ st $M>\alpha+\beta n$
Get:
$$
R_{2}\leq \frac{e^{-\epsilon x}}{x}\left( \sum a_{n} \right)\int_{0}^\infty e^{-u}(\epsilon+u)^{M}du\leq K_{2} \frac{e^{-\epsilon x}}{x}
$$
for $K_{2}$ some constant, so $R_{2}=O\left( \frac{e^{-\epsilon x}}{x} \right)$ as $x\to \infty$
So $\frac{R_{2}}{x^{-\alpha-\beta n-1}}\to 0$ as $x\to \infty$

---
For $R_1$ we note:
$$
f-\sum^Na_{n}t^{\alpha+\beta n}=o(t^{\alpha+\beta N})=O(t^{\alpha+\beta(N+1)})
$$
So
$$
R_{1}<K_{3}\int_{0}^\epsilon e^{-xt}t^{\alpha+\beta(N+1)}dt<K_{3}\int_{0}^\infty e^{-xt}t^{\alpha+\beta(N+1)}dt
$$
So
$$
R_{1}<K_{3} \frac{\Gamma(\alpha+\beta(N+1)+1)}{x^{\alpha+\beta(N+1)+1}}
$$
So $\frac{R_{1}}{x^{-\alpha-\beta(N+1)}}\to 0$ as $x \in \infty$ for all $N$.
Finally:
$$
F_{1}\sim \sum a_{n} \frac{\Gamma(\alpha+\beta n+1)}{\alpha+\beta n+1}
$$
but $F_{2}\ll F_{1}\implies F\sim F_{1}$