Consider the [[XNotes/Oscillatory Integrals]]:
$$
F(x)=\int_{a}^{b}f(t)e^{ix\phi(t)}dt
$$
where $\phi$ is stationary at a point $c\in(a,b)$.

# Method
Suppose that $\phi''(c)\neq0$
It is very similar if $c$ is of higher order.
## Taylor expand
Write:
$$
\phi(t) = \phi(c) + \frac{\phi''(c)}{2}(t-c)^{2} + \dots
$$
## Separate into sections
Let $\epsilon>0$ be small (but will depend on $x$)
By [[XNotes/Oscillatory Integrals with monotonic phase]], 
we know that in the areas of monotonic $\phi$ 
we have $O\left( \frac{1}{x} \right)$ contribution.
Thus we can write:
$$
F(x) = \int_{c-\epsilon}^{c+\epsilon} f(t) e^{ix\phi(t)} dt + O\left( \frac{1}{x} \right)
$$
## Use substitution
Substitute
$$
t= c+ s x^{-1/2} \left(- \frac{\phi''(c)}{2} \right)^{-1/2}
$$
We should be left with an integral of form
$$
\int_{-\infty}^{\infty} e^{-is^{2}}ds
$$
which we solve using [[XNotes/The Fresnel Integrals]].
Note that we did have to choose a suitable $\epsilon$ for this to work,
but the exact $\epsilon$ doesn't really matter.
