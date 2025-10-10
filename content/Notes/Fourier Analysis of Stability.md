# One step
Assume a recurrence of the form:
$$
\sum_{k}a_{k}u_{m+k}^{n+1}=\sum_{k}b_{k}u_{m+k}^{n}
$$
## Amplification factor
Let $\hat{u}^n(\theta)=\sum_{m}e^{-im\theta}u_{m}^n$ for all $n$ (by using [[Notes/Fourier Transform#Sequences]])
Multiply both sides by $e^{-im\theta}$ and sum both sides over $m\in \mathbb{Z}$:
$$
\begin{align}
LHS & =\sum_{m}e^{-im\theta}\sum_{k=r}^{s} a_{k}u_{m+k}^{n+1} \\
 & = \sum_{k=r}^{s}a_{k}\sum_{m}e^{-im\theta}u_{m+k}^{n+1}\\
 & =\sum_{k=r}^{s}a_{k}\sum_{m}e^{-i(m-k)\theta}u_{m}^{n+1} \\
 & \left( \sum_{k=r}^{s}a_{k}e^{ik\theta} \right)\hat{u} ^{n+1}(\theta) \\
 \\
RHS & =\left( \sum_{k=r}^{s}b_{k}e^{ik\theta} \right)\hat{u}^{n}(\theta)
\end{align}
$$
Hence we find:
$$
\hat{u}^{n+1}(\theta)=H(\theta)\hat{u}^{n}(\theta)
$$
with
$$
H(\theta)= \frac{\sum_{k=r}^{s}b_{k}e^{ik\theta}}{\sum_{k=r}^{s} a_{k}e^{ik\theta}}
$$
### Theorem
The method is stable iff $\lvert H(\theta) \rvert\leq 1$ for all $\theta \in[-\pi,\pi]$.
#### Proof
One side is easy, due to the above calculations.
In particular, using [[Notes/Parseval's Identity]]:
$$
\lVert u^{n} \rVert = \lVert \hat{u}^{n} \rVert 
= \lvert H(\theta) \rvert ^{n} \lVert \hat{u}^{0} \rVert 
\leq \lVert \hat{u}^{0} \rVert 
$$

Suppose now that $\lvert H(\theta_{0}) \rvert>1$ for some $\theta_{0}$. 
Find a small nbd $[\theta_{1},\theta_{2}]$ of $\theta_{0}$ where $\lvert H(\theta) \rvert>1+\epsilon$. 
Now define $\hat{u}^{0}$ to be large on this nbd and 0 otherwise. 
$$
\hat{u}^{0}(\theta)=\begin{cases}
\sqrt{ \frac{2\pi}{\theta_{2}-\theta_{1} } } &  \theta_{1}\leq \theta\leq \theta_{2} \\
0 & \text{otherwise}
\end{cases}
$$
Now we calculate:
$$
\begin{align}
\lVert \hat{u}^{n} \rVert ^{2}  & = \frac{1}{2\pi} \int_{-\pi}^{\pi} \lvert H(\theta) \rvert ^{2n} \lvert \hat{u}^{0}(\theta) \rvert ^{2} d\theta \\
 & \geq \frac{1}{2\pi} (1+\epsilon)^{2n} \int_{\theta_{1}}^{\theta_{2}} \frac{2\pi}{\theta_{2}-\theta_{1}} d\theta \\
 & (1+\epsilon)^{2n}
\end{align}
$$
The integral diverges so the method is unstable.
# Multi-step
Suppose we end up with an equation of the form:
$$
\hat{u}^{n+1}(\theta)+b\hat{u}^{n}(\theta)+c\hat{u}^{n-1}(\theta)=0
$$
Then we would find the solutions to the equation $\lambda^{2}+b\lambda+c=0$ and see if they are both $\leq1$ for all $\theta$.

Tricks like this are used for other multi-step methods.

# More dimensions
Suppose now that $u_{m,l}$ varies over two spatial coordinates. 
Then the [[Notes/Fourier Transform]] is given by:
$$
\hat{u}(\theta,\psi)=\sum_{l,m\in \mathbb{Z}}u_{l,m}e^{-i(l\theta+m\psi)}
$$
and it is an isometry from $l_{2}(\mathbb{Z}^{2})$ to $L_{2}([-\pi,\pi]^{2})$
ie:
$$
\sum_{l,m\in \mathbb{Z}}\lvert u_{l,m} \rvert ^{2}=\frac{1}{4\pi^{2}}\int_{-\pi}^{\pi}\int_{-\pi}^\pi \lvert \hat{u}(\theta,\psi) \rvert ^{2}d\theta d\psi
$$
Amplification factor $H(\theta,\psi)$ also naturally generalizes and we still require $\lvert H(\theta,\psi) \rvert\leq 1$ for stability.