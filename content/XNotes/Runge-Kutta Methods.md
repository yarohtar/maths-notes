$$y_{n+1}=y_n+h\sum_{l=1}^nb_lk_l$$
where
$$k_l=f\left(t_n+c_nh, y_n+h\sum_{j=1}^na_{lj}k_j\right)$$
That is a lot of parameters. 
Some necessary conditions for convergence are:
$$\sum_{l=1}^nb_l=1$$
$$\sum_{j=1}^na_{lj}=c_l$$
Best order of Runge-Kutta method is $2n$.

### Order
Consider a 2-stage Runge-Kutta method:
$$y_{n+1}=y_n+h(b_1k_1+b_2k_2)$$
$$k_1=f(t_n,y_n)$$
$$k_2=f(t_n+c_2h, y_n+c_2hk_1)$$

Now Taylor expand $k_2$:
$$\begin{gather*}
k_2=f(t_n,y_n)+c_2h\left({\partial f\over\partial t} + k_1{\partial f\over \partial y}\right) + O(h^2)
\end{gather*}$$
Now noting that $k_1=y'$, we find that the thing in brackets is just $y''$.

Finally we find:
$$y_{n+1}-y(t_{n+1})=hy'(b_1+b_2-1)+h^2y''(b_2c_2-\frac 1 2)+O(h^3)$$
Hence we have order at least $p=2$ when $b_1+b_2=1$ and $b_2c_2=\frac 1 2$.
We have arrived at the [[XNotes/Trapezoidal rule (ODEs)]].

Trying $f=\lambda y$, we find that a higher order is impossible with this method. 
Sometimes this doesn't work!! So we would need to expand to higher order......