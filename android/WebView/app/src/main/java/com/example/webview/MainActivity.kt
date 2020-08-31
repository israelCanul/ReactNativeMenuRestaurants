package com.example.webview

import android.net.http.SslError
import android.os.Bundle
import android.webkit.SslErrorHandler
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val myWebView: WebView = findViewById(R.id.webview)

        myWebView!!.settings.javaScriptEnabled = true
        myWebView.loadUrl("https://www.royalresorts.com/services/")
    }
    fun onReceivedSslError(
        view: WebView?,
        handler: SslErrorHandler,
        er: SslError?
    ) {
        handler.proceed()
    }
}
